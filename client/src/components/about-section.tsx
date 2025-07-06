export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-br from-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional surgeon in medical facility" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Excellence in 
              <span className="text-medical-blue"> Surgical Care</span>
            </h2>
            <p className="text-lg text-medical-gray mb-6 leading-relaxed">
              As a specialist plastic surgeon operating within Buckinghamshire Healthcare, I am committed to providing 
              the highest standard of care for both routine plastic surgery and skin cancer treatments.
            </p>
            <p className="text-lg text-medical-gray mb-8 leading-relaxed">
              My practice combines cutting-edge surgical techniques with a deep understanding of patient needs, 
              ensuring optimal outcomes for every individual under my care.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Specialist in routine plastic surgery procedures</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Expert in skin cancer diagnosis and treatment</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Affiliated with Buckinghamshire Healthcare NHS Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
