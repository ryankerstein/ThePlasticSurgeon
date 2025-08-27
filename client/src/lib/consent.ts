// Google Consent Mode implementation
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Consent Mode
export const initConsentMode = () => {
  // Set default consent states before analytics loads
  window.dataLayer = window.dataLayer || [];
  
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  // Set default consent to 'denied' as a placeholder
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });

  // Check if user has already made a consent choice
  const consentChoice = localStorage.getItem('cookieConsent');
  if (consentChoice === 'accepted') {
    updateConsent(true);
  }
};

// Update consent based on user choice
export const updateConsent = (hasConsent: boolean) => {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'ad_storage': hasConsent ? 'granted' : 'denied',
      'ad_user_data': hasConsent ? 'granted' : 'denied',
      'ad_personalization': hasConsent ? 'granted' : 'denied',
      'analytics_storage': hasConsent ? 'granted' : 'denied'
    });
  }

  // Store user's choice
  localStorage.setItem('cookieConsent', hasConsent ? 'accepted' : 'denied');
};

// Check if user has made a consent choice
export const hasConsentChoice = (): boolean => {
  return localStorage.getItem('cookieConsent') !== null;
};

// Get current consent status
export const getConsentStatus = (): boolean => {
  return localStorage.getItem('cookieConsent') === 'accepted';
};