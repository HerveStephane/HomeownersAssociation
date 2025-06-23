import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-4">Kontakt</h2>
        <p className="text-center text-gray-600 mb-10">
          Wir freuen uns auf Ihre Nachricht. Bitte füllen Sie das Formular aus.
        </p>

        {submitted && (
          <div className="mb-6 text-center text-green-800 bg-green-100 border border-green-300 p-4 rounded-lg shadow">
            ✅ Ihre Nachricht wurde erfolgreich versendet.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900"
              placeholder="Ihr Name"
            />
            <label className="absolute left-5 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900"
              placeholder="Ihre E-Mail-Adresse"
            />
            <label className="absolute left-5 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              E-Mail
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900"
              placeholder="Ihre Nachricht..."
            />
            <label className="absolute left-5 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Nachricht
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
