
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Cpu, Globe } from 'lucide-react';

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 180;

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
      }
      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = 'rgba(37, 99, 235, 0.3)';
        context.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(canvas.width, canvas.height);
        p1.draw(ctx);
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.1 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />;
};

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-50/50 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[60%] h-[60%] bg-indigo-50/50 rounded-full blur-[140px]"></div>
      </div>
      
      <NeuralBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 py-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-2 mb-6 text-xs font-black tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-200 rounded-full shadow-sm"
              >
                <Activity size={14} className="animate-pulse" />
                Strategic Growth Executive
              </motion.div>
              
              <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.92] mb-6 tracking-tighter">
                Engineering <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                  Medtech's Future.
                </span>
              </h1>
              
              <p className="text-lg lg:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Scaling AI-driven diagnostic ecosystems through strategic leadership and global commercial excellence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#experience" 
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl"
              >
                View Track Record
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact" 
                className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-md"
              >
                Start Consultation
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-12 pt-10 border-t border-slate-100">
               <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">EMEA</div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Market Focus</div>
                  </div>
               </div>
               <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">AI</div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Expertise</div>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 relative w-full lg:max-w-2xl"
          >
            <div className="relative z-10">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] group bg-slate-100 border border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                  alt="Alex Haage and Team" 
                  className="w-full aspect-[4/3] object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-6 left-6 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center gap-3"
                >
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Strategy Meeting</span>
                </motion.div>

                <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-blue-300">Barcelona HQ</p>
                  <p className="text-xl font-extrabold leading-tight">Driving Sycai Medical's WW Sales Operations</p>
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 w-32 h-32 bg-blue-600/10 rounded-full -z-10 blur-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
