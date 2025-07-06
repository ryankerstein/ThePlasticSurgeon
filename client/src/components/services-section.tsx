import skinExamImage from "@assets/ChatGPT Image Jul 6, 2025, 02_51_52 PM_1751809923957.png";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-medical-blue">Surgical Services</span>
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Offering a full range of plastic surgery and skin cancer treatments with the latest techniques 
            and technology for optimal patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Routine Plastic Surgery Card */}
          <div className="bg-light-gray rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Routine Plastic Surgery</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Professional plastic surgery consultation room" 
              className="rounded-lg w-full h-48 object-cover mb-6"
            />
            <p className="text-medical-gray mb-6 leading-relaxed">
              Comprehensive plastic surgery procedures designed to enhance function and appearance, 
              utilising advanced techniques for optimal patient satisfaction and recovery.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-medical-blue rounded-full mr-3"></div>
                Reconstructive procedures
              </li>

              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-medical-blue rounded-full mr-3"></div>
                Post-trauma reconstruction
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-medical-blue rounded-full mr-3"></div>
                Scar revision therapy
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="text-medical-blue font-semibold hover:text-soft-blue transition-colors duration-200 flex items-center"
            >
              Learn More 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Skin Cancer Operations Card */}
          <div className="bg-light-gray rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Skin Cancer Operations</h3>
            </div>
            <img 
              src={skinExamImage} 
              alt="Woman examining a mole on her shoulder in front of a mirror - skin cancer self-examination" 
              className="rounded-lg w-full h-48 object-cover object-center mb-6"
              style={{ objectPosition: '50% 60%' }}
            />
            <p className="text-medical-gray mb-6 leading-relaxed">
              Expert diagnosis and surgical treatment of skin cancers, employing precise techniques 
              to ensure complete removal while preserving healthy tissue and function.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                Full skin cancer treatment
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                MDT (Multidisciplinary Team) care
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                Early detection and diagnosis
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                Wide local excisions
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                Reconstructive closure
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="text-accent-blue font-semibold hover:text-soft-blue transition-colors duration-200 flex items-center"
            >
              Learn More 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-medical-blue transition-colors duration-200">
            <svg className="w-12 h-12 text-medical-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Skin Surveillance</h4>
            <p className="text-medical-gray text-sm">Regular monitoring and assessment for early detection of skin changes</p>
          </div>

          <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-medical-blue transition-colors duration-200">
            <svg className="w-12 h-12 text-medical-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Patient Care Support</h4>
            <p className="text-medical-gray text-sm">Comprehensive care from consultation through recovery</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-medical-blue transition-colors duration-200">
            <svg className="w-12 h-12 text-medical-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Follow-up Care</h4>
            <p className="text-medical-gray text-sm">Ongoing monitoring and support for optimal healing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
