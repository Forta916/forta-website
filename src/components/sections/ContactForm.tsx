'use client';

import { useState, FormEvent, useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    productInterest: '',
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Validation state
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: '',
    productInterest: '',
  });

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate email
  const validateEmail = (email: string) => {
    if (!email) return '';
    return emailRegex.test(email) ? '' : 'Please enter a valid email address';
  };

  // Validate phone number
  const validatePhone = (phone: string) => {
    // Remove all non-digit characters to count actual digits
    const digits = phone.replace(/\D/g, '');
    
    // Check if we have exactly 10 digits (US phone number)
    if (!phone) return ''; // Empty is allowed
    if (digits.length !== 10) {
      return 'Please enter a complete 10-digit phone number';
    }
    return '';
  };
  
  // Validate product interest
  const validateProductInterest = (productInterest: string) => {
    if (!productInterest) {
      return 'Please select a product category';
    }
    return '';
  };

  // Format phone number as (XXX)-XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format based on number of digits
    if (digits.length <= 3) {
      return digits.length ? `(${digits}` : '';
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)})-${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)})-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Format phone number
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
      
      // Clear validation errors when typing
      setValidationErrors(prev => ({
        ...prev,
        phone: '',
      }));
    } else if (name === 'productInterest') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      
      // Clear validation errors when selecting
      setValidationErrors(prev => ({
        ...prev,
        productInterest: '',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      
      // Clear validation errors when typing
      if (name === 'email') {
        setValidationErrors(prev => ({
          ...prev,
          email: '',
        }));
      }
    }
  };
  
  // Validate fields on blur
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      const error = validateEmail(value);
      setValidationErrors(prev => ({
        ...prev,
        email: error,
      }));
    } else if (name === 'phone' && value) {
      // Ensure phone number is fully formatted on blur
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        phone: formattedPhone,
      }));
      
      // Validate phone number
      const error = validatePhone(formattedPhone);
      setValidationErrors(prev => ({
        ...prev,
        phone: error,
      }));
    } else if (name === 'productInterest') {
      const error = validateProductInterest(value);
      setValidationErrors(prev => ({
        ...prev,
        productInterest: error,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const productInterestError = validateProductInterest(formData.productInterest);
    
    if (emailError || phoneError || productInterestError) {
      setValidationErrors({
        email: emailError,
        phone: phoneError,
        productInterest: productInterestError,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || `Error ${response.status}: Failed to submit form`);
      }
      
      const result = await response.json();
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        productInterest: '',
      });
    } catch (error) {
      console.error('Form submission error:', error instanceof Error ? error.message : 'Unknown error');
      setFormStatus({
        type: 'error',
        message: error instanceof Error 
          ? error.message 
          : 'There was an error submitting your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {formStatus.type === 'success' ? (
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="mt-3 text-lg font-medium text-gray-900">Message Sent!</h3>
          <p className="mt-2 text-gray-900 font-medium">{formStatus.message}</p>
          <div className="mt-6">
            <Button
              onClick={() => setFormStatus({ type: null, message: '' })}
              variant="primary"
            >
              Get Back
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {formStatus.type === 'error' && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{formStatus.message}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 hover:border-blue-400 rounded-md text-gray-900 bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 hover:border-blue-400 rounded-md text-gray-900 bg-white ${
                    validationErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="(XXX)-XXX-XXXX"
                  className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 hover:border-blue-400 rounded-md text-gray-900 bg-white ${
                    validationErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                />
                {validationErrors.phone && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="productInterest" className="block text-sm font-medium text-gray-900">
                Product Interest
              </label>
              <div className="mt-1">
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 hover:border-blue-400 rounded-md text-gray-900 bg-white ${
                    validationErrors.productInterest ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                >
                  <option value="">Select a product category</option>
                  <option value="garage-doors">Garage Doors</option>
                  <option value="doors">Doors</option>
                  <option value="storage-systems">Storage Systems</option>
                  <option value="other">Other</option>
                </select>
                {validationErrors.productInterest && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.productInterest}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 hover:border-blue-400 rounded-md text-gray-900 bg-white"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 hover:border-blue-400 rounded-md text-gray-900 bg-white"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
