import React from 'react';

const plans = [
  {
    name: 'Basis',
    price: 'kostenlos',
    features: [
      'Zugang zu Gemeinschaftsinfos',
      'Teilnahme an Versammlungen',
      'Newsletter',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '€15 / Monat',
    features: [
      'Alle Basis-Vorteile',
      'Exklusive Veranstaltungen',
      'Direkter Kontakt zum Vorstand',
      'Erweiterte Serviceleistungen',
    ],
    popular: true,
  },
  {
    name: 'VIP',
    price: '€30 / Monat',
    features: [
      'Alle Premium-Vorteile',
      'Priorisierte Anliegenbearbeitung',
      'Mitgestaltung bei Projekten',
      'Einladung zu VIP-Events',
    ],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6" id="pricing">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Mitgliedschaftstarife
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {plans.map(({ name, price, features, popular }, index) => (
            <div
              key={index}
              className={`flex-1 border rounded-2xl p-8 shadow-lg flex flex-col ${
                popular ? 'border-green-600 bg-green-50' : 'border-gray-200'
              }`}
            >
              {popular && (
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold w-max mb-4 mx-auto">
                  Beliebt
                </div>
              )}

              <h3 className="text-2xl font-semibold text-green-800 mb-4">{name}</h3>
              <p className="text-4xl font-extrabold text-green-700 mb-6">{price}</p>

              <ul className="mb-8 text-left space-y-3 text-gray-700">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto rounded-full py-3 px-6 font-semibold transition ${
                  popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                Jetzt auswählen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
