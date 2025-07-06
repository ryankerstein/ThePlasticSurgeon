export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-gradient-to-br from-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            State-of-the-Art <span className="text-medical-blue">Medical Facilities</span>
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Operating in modern, fully equipped medical facilities that meet the highest standards 
            of safety and patient care within Buckinghamshire Healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Modern medical facility interior" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Operating Theatres</h3>
              <p className="text-medical-gray">State-of-the-art surgical suites with the latest technology for precision procedures</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Sterile surgical instruments and environment" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sterile Environment</h3>
              <p className="text-medical-gray">Maintained to the highest infection control standards for patient safety</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Modern hospital consultation room" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Private Consultation Rooms</h3>
              <p className="text-medical-gray">Comfortable, private spaces for patient consultations and follow-up care</p>
            </div>
          </div>
        </div>

        {/* Buckinghamshire Healthcare Connection */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Buckinghamshire Healthcare Partnership</h3>
            <p className="text-lg text-medical-gray mb-6 max-w-3xl mx-auto">
              Operating within the trusted network of Buckinghamshire Healthcare NHS Trust, 
              ensuring the highest standards of medical care and patient safety.
            </p>
            <a 
              href="https://buckinghamshireprivatehealthcare.co.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-medical-blue font-semibold hover:text-soft-blue transition-colors duration-200 inline-flex items-center"
            >
              Learn More About Buckinghamshire Healthcare 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
