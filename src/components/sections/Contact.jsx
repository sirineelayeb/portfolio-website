import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Message sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's build something great together
          </p>
        </div>

    {/* Pure minimalist card */}
<div className="card-glass p-6 lg:p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover-lift transition-all duration-500">
  <form onSubmit={handleSubmit} className="space-y-16">

{/* Name */}
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      placeholder="Your name"
      className="w-full pt-4 pb-3 bg-transparent border-b-2 border-gray-700 
                 focus:border-primary focus:outline-none transition-all duration-300 
                 text-lg text-center placeholder:text-gray-500
                 text-gray-100"
    />
    {/* Email */}
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      placeholder="your@email.com"
        className="w-full pt-4 pb-3 bg-transparent border-b-2 border-gray-700 
                 focus:border-primary focus:outline-none transition-all duration-300 
                 text-lg text-center placeholder:text-gray-500
                 text-gray-100"
    />

    {/* Message */}
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows="6"
      placeholder="Your message..."
        className="w-full pt-4 pb-3 bg-transparent border-b-2 border-gray-700 
                 focus:border-primary focus:outline-none transition-all duration-300 
                 text-lg text-center placeholder:text-gray-500
                 text-gray-100"
    />

    {/* Clean, bold button */}
    <button
      type="submit"
      className="w-full py-6 rounded-3xl bg-gradient-to-r from-primary to-secondary 
                 text-white font-medium text-lg tracking-wide
                 shadow-lg hover:shadow-xl hover:shadow-primary/30
                 transform hover:-translate-y-2 active:translate-y-0
                 transition-all duration-400"
    >
      Send Message
    </button>

  </form>
</div>

        <p className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
          I reply fast • Usually within a few hours
        </p>
      </div>
    </section>
  );
};