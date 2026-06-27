import { motion } from 'motion/react';
import { ArrowRight, Globe, Layers, Zap, Shield, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    desc: 'Bespoke designs that capture your brand essence and engage users.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    desc: 'Intuitive user experiences designed for maximum retention.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Landing Pages',
    desc: 'High-converting landing pages built to turn visitors into customers.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Shield,
    title: 'Branding',
    desc: 'Unique visual identities that stand out in a crowded market.',
    color: 'from-green-500 to-emerald-400'
  },
  {
    icon: Users,
    title: 'SEO Optimization',
    desc: 'Get found on search engines with data-driven SEO strategies.',
    color: 'from-blue-400 to-sky-300'
  },
  {
    icon: BarChart,
    title: 'Social Media',
    desc: 'Creative graphics that boost engagement on all social platforms.',
    color: 'from-pink-400 to-rose-300'
  }
];

const stats = [
  { value: '500+', label: 'Projects Done' },
  { value: '250+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">Premium Digital Agency</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              Modern Website Design That <span className="text-gradient">Grows Your Business</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              We build high-performance digital products that combine stunning aesthetics 
              with seamless functionality to help your brand thrive in the digital age.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform flex items-center gap-2 group">
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-colors">
                Get Free Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 p-4 rounded-2xl glass border border-white/10 shadow-2xl backdrop-blur-xl">
               <img 
                 src="/images/khush brand hero image.png" 
                 alt="Khush brand hero image" 
                 className="rounded-xl w-full h-auto opacity-90"
                 referrerPolicy="no-referrer"
               />
            </div>
            {/* Absolute floating elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass-card p-6 rounded-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Site Speed</div>
                  <div className="text-lg font-bold">99 / 100</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-6 rounded-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Active Clients</div>
                  <div className="text-lg font-bold">2,481+</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tailored digital solutions to elevate your brand and exceed your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group relative overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
                {/* Background glow hover */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Fast Delivery', desc: 'Quick turnaround without quality loss.' },
                  { title: 'Modern Design', desc: 'Latest UI/UX trends integrated.' },
                  { title: 'Responsive', desc: 'Perfect on any screen size.' },
                  { title: 'Affordable', desc: 'Premium quality for fair price.' }
                ].map((item, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl">
                    <h4 className="font-bold mb-2 text-blue-400">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
           </div>
           <div className="order-1 lg:order-2">
             <h2 className="text-4xl font-bold mb-6">Why Choose <span className="text-gradient">Khushtech?</span></h2>
             <p className="text-slate-400 mb-8 leading-relaxed">
               We don't just build websites; we create digital engines for growth. 
               Our process is focused on results, blending strategy with high-end creative execution.
             </p>
             <ul className="space-y-4 mb-10">
               {[
                 'SEO Friendly Architecture',
                 'Professional 24/7 Support',
                 'Clean Performance-First Code',
                 'Strategic Creative Guidance'
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-slate-300">
                   <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                     <Zap size={12} />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>
             <Link to="/about" className="text-blue-500 font-bold flex items-center gap-2 group">
               Read Our Story
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-8 rounded-3xl relative">
                <div className="absolute top-8 right-8 text-blue-500 opacity-20">
                   <Users size={48} />
                </div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-500 text-sm">★</span>)}
                </div>
                <p className="text-slate-300 mb-8 italic leading-relaxed">
                  "Working with Khushtech was a game-changer for our brand. They transformed our vision into a stunning digital reality."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    alt="Client" 
                    className="w-12 h-12 rounded-full border-2 border-blue-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold">Client Name</div>
                    <div className="text-xs text-slate-500">CEO, TechStartup</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 p-12 md:p-24 text-center relative">
          <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready To Build Your <br />Dream Website?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Join the hundreds of brands that have elevated their digital presence with Khushtech.
            </p>
            <Link to="/contact" className="px-12 py-5 bg-white text-blue-700 rounded-full font-bold text-xl hover:scale-105 transition-transform inline-flex items-center gap-3">
              Start Your Project
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
