import { useCallback } from 'react';

const SITE_KEY = '6Lc9OOIrAAAAABtQtpV7Fbkck2fu81QxfbHFFZ1F';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function useRecaptcha() {
  const executeRecaptcha = useCallback(async (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        console.error('reCAPTCHA: Not in browser environment');
        reject(new Error('reCAPTCHA can only be executed in the browser'));
        return;
      }

      if (!window.grecaptcha) {
        console.error('reCAPTCHA: Script not loaded. Check if the script is properly included.');
        reject(new Error('reCAPTCHA not loaded'));
        return;
      }

      console.log('reCAPTCHA: Attempting to execute with site key:', SITE_KEY);
      console.log('reCAPTCHA: Action:', action);

      window.grecaptcha.ready(async () => {
        try {
          console.log('reCAPTCHA: Ready, executing...');
          const token = await window.grecaptcha.execute(SITE_KEY, { action });
          console.log('reCAPTCHA: Token generated successfully:', token.substring(0, 20) + '...');
          resolve(token);
        } catch (error) {
          console.error('reCAPTCHA: Execution error:', error);
          // In development, we'll still allow form submission but log the error
          if (process.env.NODE_ENV === 'development') {
            console.warn('reCAPTCHA: Development mode - using dummy token');
            resolve('development-dummy-token-' + Date.now());
          } else {
            reject(error);
          }
        }
      });
    });
  }, []);

  return { executeRecaptcha };
}