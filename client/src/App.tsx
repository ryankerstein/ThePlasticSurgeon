import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { initGA, initClarity } from "./lib/analytics";
import { initConsentMode } from "./lib/consent";
import { useAnalytics } from "./hooks/use-analytics";
import CookieConsent from "@/components/cookie-consent";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize consent mode and analytics when app loads
  useEffect(() => {
    // Initialize consent mode first (before analytics)
    initConsentMode();

    // Verify required environment variables are present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }

    if (!import.meta.env.VITE_CLARITY_PROJECT_ID) {
      console.warn('Missing required Microsoft Clarity key: VITE_CLARITY_PROJECT_ID');
    } else {
      initClarity();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
