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
            <div className="mb-4">
              <p className="text-xl text-medical-blue font-semibold mb-2">Mr Ryan Kerstein</p>
              <p className="text-lg text-medical-gray">FRCS, BAPRAS • Skin Cancer Lead</p>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Expert Plastic Surgery & 
              <span className="text-medical-blue"> Skin Cancer Care</span>
            </h1>
            <p className="text-xl text-medical-gray mb-8 leading-relaxed">
              Providing comprehensive plastic surgery and skin cancer treatments in Buckinghamshire. 
              Combining clinical excellence with compassionate patient care for optimal outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/attached_assets/0mj9yybg_1751807199774.png" 
              alt="Mr Ryan Kerstein - Plastic Surgery Specialist" 
              className="rounded-xl shadow-2xl w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
