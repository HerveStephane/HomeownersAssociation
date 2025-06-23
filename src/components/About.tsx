import React from 'react';

const boardMembers = [
  {
    name: 'Andreas Langrock',
    role: 'Vorstandsvorsitzende',
    image: 'public/images/andreas.png',
  },
  {
    name: 'Karl Langrock',
    role: 'Stellvertretender Vorsitzender',
    image: 'public/images/andreas.png',
  },
  {
    name: 'Maria Dietrich',
    role: 'Buchhalterin',
    image: 'public/images/andreas.png',
  },
];

const About: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Über unsere Gemeinschaft
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
          Unsere Hausgemeinschaft steht für Zusammenhalt, Transparenz und ein
          angenehmes Miteinander. Seit unserer Gründung engagieren wir uns für
          ein gepflegtes Wohnumfeld, klare Kommunikation und die nachhaltige
          Entwicklung unserer Wohnanlage.
        </p>

        {/* Board Member Section */}
        <h3 className="text-2xl font-semibold text-green-700 mb-6">Unser Vorstand</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-medium text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
