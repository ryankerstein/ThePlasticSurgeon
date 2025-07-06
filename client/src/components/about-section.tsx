import surgicalImage from "@assets/a767ecd8-28c8-4a48-8cb6-be876f975d7a_1751811935633.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-br from-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={surgicalImage} 
              alt="Mr Ryan Kerstein performing surgery with precision surgical loupes and equipment" 
              className="rounded-xl shadow-lg w-full h-auto max-w-lg mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Plastic Surgeon & 
              <span className="text-medical-blue"> Skin Cancer Specialist</span>
            </h2>
            <p className="text-lg text-medical-gray mb-6 leading-relaxed">
              As a Fellow of the Royal College of Surgeons (FRCS) and full member of BAPRAS (British Association of Plastic, 
              Reconstructive and Aesthetic Surgeons), I am a consultant plastic surgeon specialising in comprehensive 
              skin cancer treatment and reconstructive plastic surgery within the NHS.
            </p>
            <p className="text-lg text-medical-gray mb-8 leading-relaxed">
              As the Skin Cancer Lead for Buckinghamshire Healthcare NHS Trust, I provide expert plastic surgery 
              and skin cancer operations, combining advanced surgical techniques with multidisciplinary team care 
              to deliver optimal outcomes for patients across Buckinghamshire.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Fellow of the Royal College of Surgeons</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Full member of BAPRAS</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Skin Cancer Lead for hospital</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Operating within Buckinghamshire Healthcare NHS Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
