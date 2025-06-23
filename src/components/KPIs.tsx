import React from 'react';
import {
  Users,
  Home,
  Hammer,
  CalendarCheck,
} from 'lucide-react';

const kpis = [
  {
    label: 'Jahre gemeinschaftliches Wohnen',
    value: '15+',
    icon: Home,
  },
  {
    label: 'Mitglieder im Verein',
    value: '120',
    icon: Users,
  },
  {
    label: 'Realisierte Projekte',
    value: '35',
    icon: Hammer,
  },
  {
    label: 'Veranstaltungen pro Jahr',
    value: '12',
    icon: CalendarCheck,
  },
];

const KPIs: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20 px-4" id="kpi">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Zahlen, die für sich sprechen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {kpis.map(({ value, label, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <Icon className="w-10 h-10 text-green-600 mb-4" />
              <div className="text-4xl font-extrabold text-green-700 mb-2">{value}</div>
              <p className="text-gray-600 text-sm font-medium text-center">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPIs;
