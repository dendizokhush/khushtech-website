import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const response = await fetch("https://formspree.io/f/xykqwrnr", {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Thank you for your message! Our team will contact you shortly.");
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="pt-24 pb-24 px-6">
      <section className="max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Let's Build Something <span className="text-gradient">Epic</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Ready to take your digital presence to the next level? 
          Drop us a message and let's get started.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-8">
              {[
                { icon: Mail, title: 'Email Us', info: 'info@khushtech.online', desc: 'Direct support for all inquiries.' },
                { icon: Phone, title: 'Call Us', info: '+254 115 810 524', desc: 'Available for consultations.' },
                { icon: MapPin, title: 'Visit Us', info: 'Mombasa, Kenya', desc: 'Our creative headquarters.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                   <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                      <item.icon size={24} />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <div className="text-blue-400 font-semibold mb-1">{item.info}</div>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div>
             <h3 className="text-xl font-bold mb-6">Follow Our Socials</h3>
             <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
             </div>
          </div>

          <div className="p-8 glass-card rounded-[2rem] overflow-hidden">
             <div className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Business Hours</div>
             <div className="space-y-3">
                <div className="flex justify-between text-sm">
                   <span className="text-slate-300">Monday - Friday</span>
                   <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-slate-300">Saturday</span>
                   <span className="text-white font-bold">11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-slate-300">Sunday</span>
                   <span className="text-blue-500 font-bold italic">Rest Day</span>
                </div>
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card p-10 md:p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden">
           {/* Background glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl pointer-events-none" />
           
           <h2 className="text-3xl font-bold mb-8">Send A Message</h2>
           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Denis Wandera" 
                      className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-white"
                      />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                    <input  
                        required
                        name="email"
                        type="email" 
                        placeholder="denis@example.com" 
                        className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-white"
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Subject</label>
                 <select 
                    name="service"
                    className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-white appearance-none">
                    <option>Website Design</option>
                    <option>UI/UX Project</option>
                    <option>Mobile App Development</option>
                    <option>SEO Services</option>
                    <option>Other / General</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
                 <textarea 
                   required
                   name="message"
                   rows={5}
                   placeholder="Tell us about your project..." 
                   className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-all text-white resize-none"
                 />
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={20} />
              </button>
           </form>
        </div>
      </section>

      {/* Google Maps Simulation */}
      <section className="max-w-7xl mx-auto mt-24">
        <div className="w-full h-[400px] rounded-[3rem] overflow-hidden glass border-white/10">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.22699898!2d-118.402283!3d34.01944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzA5LjkiTiAxMTjCsDI0JzA4LjIiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
             allowFullScreen 
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
           />
        </div>
      </section>
    </div>
  );
}
