import { motion } from 'motion/react';
import { Target, Eye, Users, Heart, Zap, Award } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Passion', desc: 'We pour our heart into every pixel and line of code.' },
  { icon: Zap, title: 'Speed', desc: 'Fast delivery without ever compromising on precision.' },
  { icon: Eye, title: 'Vision', desc: 'Future-forward designs that stand the test of time.' },
  { icon: Award, title: 'Excellence', desc: 'Committed to delivering world-class quality.' }
];

export default function About() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Digital Architects of <span className="text-gradient">Tomorrow</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Founded in 2015, Khushtech has been at the forefront of digital innovation, 
            helping brands navigate the complex landscape of the web with style and substance.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/images/khush brand about us.png" 
              alt="Khush brand about us image" 
              className="rounded-3xl shadow-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl hidden md:block">
               <div className="text-4xl font-bold text-blue-500 mb-1">10+</div>
               <div className="text-sm font-semibold uppercase tracking-wider">Years of Success</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Journey</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                From a small design studio in a garage to a global creative powerhouse, 
                Khushtech has always prioritized one thing: the success of our clients. 
                Our journey is paved with bold decisions, creative risks, and a relentless 
                drive for excellence.
              </p>
              <p>
                Today, we are a diverse team of designers, developers, and strategists 
                united by a single goal – to create digital experiences that move people 
                and markets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div>
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Target className="text-blue-500" size={20} />
                    Mission
                  </h3>
                  <p className="text-sm text-slate-400">To simplify complexity and deliver digital growth through design.</p>
               </div>
               <div>
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Eye className="text-purple-500" size={20} />
                    Vision
                  </h3>
                  <p className="text-sm text-slate-400">To be the most trusted partner for brands in the digital age.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Our Core Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl text-center border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
                <v.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Meet The <span className="text-gradient">Experts</span></h2>
              <p className="text-slate-400 max-w-xl">A dedicated team of creative minds committed to your brand's growth.</p>
            </div>
            <button className="text-blue-500 font-bold hover:underline">View Open Positions</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
    name: 'Denis Wandera', 
    role: 'Founder & Director', 
    img: '/images/Denis%20Wandera.png' 
  },
  { 
    name: 'Sarah Chen', 
    role: 'Head of Design', 
    img: '/images/designer.jpg' 
  },
  { 
    name: 'Alex Rivera', 
    role: 'CTO', 
    img: '/images/developer.jpg' 
  },
  { 
    name: 'Emma Watson', 
    role: 'Lead Developer', 
    img: '/images/manager.jpg' 
  }
            ].map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={`https://i.pravatar.cc/400?u=${member.img}`} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-blue-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
