import headshotImage from "@assets/0mj9yybg_1751807199774.png";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-br from-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={headshotImage} 
              alt="Mr Ryan Kerstein - Professional portrait" 
              className="rounded-xl shadow-lg w-full h-auto max-w-lg mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Excellence in 
              <span className="text-medical-blue"> Surgical Care</span>
            </h2>
            <p className="text-lg text-medical-gray mb-6 leading-relaxed">
              As a Fellow of the Royal College of Surgeons and full member of BAPRAS (British Association of Plastic, 
              Reconstructive and Aesthetic Surgeons), I am committed to providing the highest standard of care 
              for both routine plastic surgery and skin cancer treatments.
            </p>
            <p className="text-lg text-medical-gray mb-8 leading-relaxed">
              As the Skin Cancer Lead for my hospital within Buckinghamshire Healthcare, I combine cutting-edge 
              surgical techniques with a deep understanding of patient needs, ensuring optimal outcomes for 
              every individual under my care.
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
