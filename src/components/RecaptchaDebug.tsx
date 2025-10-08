"use client";

import { useEffect, useState } from 'react';

export default function RecaptchaDebug() {
  const [status, setStatus] = useState<string>('Checking...');

  useEffect(() => {
    const checkRecaptcha = () => {
      if (typeof window === 'undefined') {
        setStatus('❌ Not in browser');
        return;
      }

      if (!window.grecaptcha) {
        setStatus('❌ reCAPTCHA script not loaded');
        return;
      }

      setStatus('✅ reCAPTCHA script loaded');
      
      // Test execution
      window.grecaptcha.ready(() => {
        setStatus('✅ reCAPTCHA ready');
        
        window.grecaptcha.execute('6Lc9OOIrAAAAABtQtpV7Fbkck2fu81QxfbHFFZ1F', { action: 'test' })
          .then((token) => {
            setStatus('✅ reCAPTCHA working - Token: ' + token.substring(0, 20) + '...');
          })
          .catch((error) => {
            setStatus('❌ reCAPTCHA error: ' + error.message);
          });
      });
    };

    // Check immediately and then every second for 10 seconds
    checkRecaptcha();
    const interval = setInterval(checkRecaptcha, 1000);
    
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      left: '10px', 
      background: 'white', 
      border: '1px solid #ccc', 
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <strong>reCAPTCHA Debug:</strong><br />
      {status}
    </div>
  );
}