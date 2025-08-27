import { useState, useEffect } from 'react';
import { updateConsent, hasConsentChoice, getConsentStatus } from '@/lib/consent';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner if user hasn't made a choice yet
    if (!hasConsentChoice()) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    updateConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    updateConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent</h3>
            <p className="text-sm text-gray-600">
              We use cookies and similar technologies to improve your experience on our website, 
              analyse website traffic, and understand where our visitors are coming from. 
              This helps us provide better healthcare information and services.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              By clicking "Accept All", you consent to our use of cookies for analytics and website optimization. 
              You can change your preferences at any time.
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleDecline}
              className="text-sm px-4 py-2"
            >
              Decline
            </Button>
            <Button 
              onClick={handleAccept}
              className="bg-medical-blue hover:bg-blue-800 text-sm px-4 py-2"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}