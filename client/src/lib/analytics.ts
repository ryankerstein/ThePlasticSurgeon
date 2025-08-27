// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

// Initialize Google Analytics with Consent Mode
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Initialize gtag function first
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  gtag('js', new Date());
  gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });
};

// Initialize Microsoft Clarity
export const initClarity = () => {
  const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (!clarityProjectId) {
    console.warn('Missing required Microsoft Clarity key: VITE_CLARITY_PROJECT_ID');
    return;
  }

  // Microsoft Clarity tracking script
  (function(c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
    c[a] = c[a] || function() {
      (c[a].q = c[a].q || []).push(arguments);
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", clarityProjectId);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url,
    page_title: document.title,
    page_location: window.location.origin + url
  });
};

// Track events with enhanced properties
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number,
  customProperties?: Record<string, any>
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...customProperties,
  });
};

// Track medical-specific events
export const trackMedicalEvent = (eventType: 'contact_form_submit' | 'service_inquiry' | 'appointment_request', details?: Record<string, any>) => {
  trackEvent(eventType, 'medical_interaction', undefined, undefined, details);
  
  // Also track in Clarity with custom tags
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', 'medical_event', eventType);
    if (details) {
      Object.entries(details).forEach(([key, value]) => {
        window.clarity('set', key, value);
      });
    }
  }
};

// Track contact form interactions
export const trackContactFormEvent = (step: 'started' | 'field_focus' | 'validation_error' | 'submitted', field?: string) => {
  trackEvent('contact_form_interaction', 'form_engagement', `${step}${field ? `_${field}` : ''}`, undefined, {
    form_step: step,
    form_field: field
  });
};

// Track service page interactions
export const trackServiceInteraction = (service: string, action: 'viewed' | 'clicked' | 'inquired') => {
  trackEvent('service_interaction', 'service_engagement', service, undefined, {
    service_type: service,
    interaction_type: action
  });
};