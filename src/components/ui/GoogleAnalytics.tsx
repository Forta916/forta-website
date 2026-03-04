'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-0FGC0MTQG7';
const ADS_ID = 'AW-17220461363';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const existing = document.querySelector('script[src^="https://www.googletagmanager.com/gtag/js"]');

    const script1 =
      existing instanceof HTMLScriptElement
        ? existing
        : (() => {
            const s = document.createElement('script');
            s.async = true;
            s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            document.head.appendChild(s);
            return s;
          })();

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = window.gtag || gtag;
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
      gtag('config', '${ADS_ID}');
    `;
    document.head.appendChild(script2);

    return () => {
      if (!existing) document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: pathname });
      window.gtag('config', ADS_ID, { page_path: pathname });
    }
  }, [pathname]);

  return null;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'js' | 'event',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
