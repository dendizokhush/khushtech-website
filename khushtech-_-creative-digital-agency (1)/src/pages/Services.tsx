import { motion } from 'motion/react';
import { Globe, Layers, Zap, Shield, Smartphone, PenTool, Database, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    desc: 'Cutting-edge designs with a focus on conversions and brand identity.',
    benefits: ['Custom Layouts', 'Speed Optimized', 'Mobile First'],
    price: 'From $1,499',
    image: '/images/web-design.png'
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    desc: 'Deep user research and testing for intuitive product experiences.',
    benefits: ['User Persona Research', 'Wireframing', 'Prototyping'],
    price: 'From $1,999',
    image: '/images/web-design.png'
  },
  {
    icon: Database,
    title: 'E-commerce Solutions',
    desc: 'Robust online stores built on modern frameworks for scalability.',
    benefits: ['Payment Integration', 'Inventory Management', 'Safe Checkout'],
    price: 'From $2,499',
    image: '/images/ecommerce-solutions.jpg'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps that users love.',
    benefits: ['iOS & Android', 'Performance Focused', 'Cloud Ready'],
    price: 'From $4,999',
    image: '/images/web-design.png'
  },
  {
    icon: PenTool,
    title: 'Full Branding',
    desc: 'Logos, color palettes, and voice that define your unique brand.',
    benefits: ['Logo Design', 'Brand Guidelines', 'Visual Assets'],
    price: 'From $999',
    image: '/images/web-design.png'
  },
  {
    icon: Zap,
    title: 'SEO Services',
    desc: 'Dominating search results with calculated strategy and execution.',
    benefits: ['Keyword Research', 'Technical SEO', 'Backlink Strategy'],
    price: 'From $499/mo',
    image: '/images/web-design.png'
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Our Specialized <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From initial concept to final deployment, we provide end-to-end 
            digital solutions that move the needle for your business.
          </p>
        </div>
      </section>

      <section className="px-6 space-y-32">
        {services.map((service, idx) => (
          <div key={idx} className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                 <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 shadow-lg shadow-blue-500/10">
                    <service.icon size={32} />
                 </div>
                 <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                   {service.desc}
                 </p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <Check size={12} />
                        </div>
                        {benefit}
                      </li>
                    ))}
                 </ul>
                 <div className="flex items-center gap-6">
                    <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all">
                      Get a Quote
                    </Link>
                    <div className="text-xl font-bold text-gradient">{service.price}</div>
                 </div>
              </div>
              <div className={idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                 <div className="relative group">
                   <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity" />
                   <img 
                    src={service.image}
 alt={service.title}
 className="relative z-10 rounded-3xl shadow-2xl opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                   />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pt-32">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
           <p className="text-slate-400">Choose the best plan for your needs.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { name: 'Starter', price: '999', features: ['UI/UX Design', '3 Pages Landing Page', 'Mobile Responsive'] },
             { name: 'Professional', price: '2,499', features: ['Full UI/UX', 'Up to 10 Pages', 'CMS Integration', 'SEO Basics'], active: true },
             { name: 'Enterprise', price: 'Custom', features: ['E-commerce', 'User Portals', 'Advanced SEO', 'Weekly Support'] },
           ].map((plan, idx) => (
             <div key={idx} className={`glass-card p-10 rounded-3xl relative overflow-hidden transition-all hover:-translate-y-2 ${plan.active ? 'border-blue-500/50 scale-105' : ''}`}>
               {plan.active && <div className="absolute top-0 right-0 py-1 px-4 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">Popular</div>}
               <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
               <div className="text-4xl font-bold text-white mb-8">
                 {plan.price !== 'Custom' ? `$${plan.price}` : plan.price}
               </div>
               <ul className="space-y-4 mb-12">
                 {plan.features.map(f => (
                   <li key={f} className="flex gap-3 text-slate-400 text-sm">
                     <Check size={16} className="text-blue-500 shrink-0" />
                     {f}
                   </li>
                 ))}
               </ul>
               <Link to="/contact" className={`w-full py-4 rounded-xl font-bold block text-center ${plan.active ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-300'}`}>
                 Get Started
               </Link>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
