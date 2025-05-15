import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7714756137:AAFF-KiEbHckqLzUkrhuiI36jWgV7ukq6bA';
const TELEGRAM_CHAT_ID = '-4634635994';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.productInterest) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Format a nice message for Telegram
    const message = formatTelegramMessage(formData);
    
    // Send to Telegram
    const telegramResponse = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });
    
    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      throw new Error(`Failed to send message to Telegram: ${errorData.description || 'Unknown error'}`);
    }
    
    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}

function formatTelegramMessage(formData: any) {
  // Sanitize all user inputs
  const name = escapeHtml(formData.name || '');
  const email = escapeHtml(formData.email || '');
  const phone = escapeHtml(formData.phone || 'Not provided');
  const subject = escapeHtml(formData.subject || '');
  const message = escapeHtml(formData.message || '');
  
  // Get product interest display name
  let productInterest = formData.productInterest || '';
  let productInterestDisplay = '';
  
  switch (productInterest) {
    case 'garage-doors':
      productInterestDisplay = 'Garage Doors';
      break;
    case 'doors':
      productInterestDisplay = 'Doors';
      break;
    case 'storage-systems':
      productInterestDisplay = 'Storage Systems';
      break;
    case 'other':
      productInterestDisplay = 'Other';
      break;
    default:
      productInterestDisplay = escapeHtml(productInterest);
  }

  // Format the current date
  const now = new Date();
  const formattedDate = now.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return `
<b>🔔 New Contact Form Submission</b>

<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Phone:</b> ${phone}
<b>Product Interest:</b> ${productInterestDisplay}
<b>Subject:</b> ${subject}

<b>Message:</b>
${message}

<i>Submitted on ${formattedDate}</i>
`;
}
