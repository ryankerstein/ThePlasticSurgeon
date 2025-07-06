import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertTriangle } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Patient Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding your condition and treatment options is essential for making informed healthcare decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-medical-blue">What is Skin Cancer?</CardTitle>
              <CardDescription>Understanding the basics of skin cancer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Skin cancer occurs when skin cells grow abnormally, most commonly due to UV radiation exposure. 
                The three main types are basal cell carcinoma, squamous cell carcinoma, and melanoma.
              </p>
              <p className="text-gray-600">
                Early detection is crucial for successful treatment. Look for changes in moles, new growths, 
                or spots that don't heal.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-medical-blue">When to See a Plastic Surgeon?</CardTitle>
              <CardDescription>Understanding referral pathways</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Plastic surgeons treat conditions requiring reconstruction, cosmetic improvement, or complex 
                wound management. Common reasons include:
              </p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Skin cancer removal and reconstruction</li>
                <li>Trauma and wound management</li>
                <li>Congenital conditions</li>
                <li>Aesthetic procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-medical-blue">Treatment Options</CardTitle>
              <CardDescription>Understanding your choices</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Treatment plans are individualised based on your specific condition, health status, 
                and personal preferences. Options may include:
              </p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Surgical excision</li>
                <li>Reconstructive procedures</li>
                <li>Non-surgical treatments</li>
                <li>Ongoing monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-medical-blue">Preparing for Surgery</CardTitle>
              <CardDescription>What to expect before your procedure</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Proper preparation helps ensure the best outcomes. Your surgical team will provide 
                specific instructions, which typically include:
              </p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Pre-operative assessments</li>
                <li>Medication adjustments</li>
                <li>Lifestyle modifications</li>
                <li>Post-operative care planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-medical-blue">Recovery & Follow-up</CardTitle>
              <CardDescription>Your journey after treatment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Recovery times vary depending on the procedure and individual factors. 
                Follow-up care is essential for optimal healing and monitoring.
              </p>
              <p className="text-gray-600">
                Your surgical team will provide detailed post-operative instructions and 
                schedule appropriate follow-up appointments.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-medical-blue">Prevention & Screening</CardTitle>
              <CardDescription>Protecting your skin health</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Prevention is the best approach to skin health. Key strategies include:
              </p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Sun protection (SPF 50+)</li>
                <li>Regular self-examinations</li>
                <li>Professional skin checks</li>
                <li>Avoiding tanning beds</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Medical Disclaimer</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                This information is for educational purposes only and does not constitute medical advice. 
                It should not be used as a substitute for professional medical consultation, diagnosis, or treatment. 
                Always seek the advice of your GP or other qualified healthcare provider with any questions 
                you may have regarding a medical condition. Never disregard professional medical advice or delay 
                seeking it because of information you have read on this website. If you think you may have a 
                medical emergency, call your GP or emergency services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}