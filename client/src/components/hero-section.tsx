import headshotImage from "@assets/0mj9yybg_1751807199774.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-medical-blue">Mr Ryan Kerstein</span>
              <br />
              Plastic Surgeon & 
              <span className="text-medical-blue"> Skin Cancer Specialist</span>
            </h1>
            <p className="text-xl text-medical-gray mb-8 leading-relaxed">
              Expert plastic surgeon providing comprehensive skin cancer treatment and plastic surgery in Buckinghamshire NHS Trust. 
              Specialising in skin cancer operations, reconstructive surgery, and MDT care with clinical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={scrollToContact}
                className="bg-medical-blue text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Consultation
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-medical-blue text-medical-blue px-8 py-4 rounded-lg hover:bg-medical-blue hover:text-white transition-colors duration-200 font-semibold text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Our Services
              </button>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <svg className="w-4 h-4 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-gray-700 text-sm">
                Looking for Medtech and Health Innovation expertise?<br />
                Visit{" "}
                <a 
                  href="https://thesurgeon.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-medical-blue font-medium hover:text-blue-800 transition-colors"
                >
                  thesurgeon.io
                </a>
                {" "}for my Medtech practice
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={headshotImage} 
              alt="Mr Ryan Kerstein - Plastic Surgery Specialist" 
              className="rounded-xl shadow-2xl w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
