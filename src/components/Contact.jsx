import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Inquiry from website');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const a = document.createElement('a');
    a.href = `mailto:info@asalibship.com?subject=${subject}&body=${body}`;
    a.click();
  };

  const infoItems = [
    { icon: MapPin, label: c.info.address },
    { icon: Phone, label: c.info.phone },
    { icon: Mail, label: c.info.email },
    { icon: Clock, label: c.info.hours },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="h-1 w-12 bg-primary-300" />
            <h2 className="text-4xl md:text-5xl font-black text-primary-900 uppercase tracking-tight">
              {c.title}
            </h2>
            <div className="h-1 w-12 bg-primary-300" />
          </div>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Info + Departments */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
          
            {/* Departments */}
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={22} className="text-primary-300" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-primary-300">
                  {c.departments}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {c.deptList.map((dept, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 rounded-xl px-5 py-3 transition-colors duration-200"
                  >
                    <span className="text-sm font-semibold text-gray-200 whitespace-nowrap">
                      {dept.label}
                    </span>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-primary-300 hover:text-white text-xs font-mono truncate transition-colors duration-200"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {c.form.name}
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder={c.form.namePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {c.form.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder={c.form.emailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {c.form.subject}
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder={c.form.subjectPlaceholder}
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {c.form.message}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={c.form.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-3 bg-primary-900 hover:bg-primary-300 text-white font-bold py-4 px-8 rounded-lg uppercase tracking-wider text-sm transition-colors duration-300 shadow-md hover:shadow-xl"
              >
                <Send size={18} />
                {c.form.send}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
