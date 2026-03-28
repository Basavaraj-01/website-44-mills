import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Utensils,
  GlassWater,
  CalendarDays,
  Users,
  PartyPopper,
  Sun,
  Star,
  ShieldCheck,
  Award,
  ChevronRight,
  Menu,
  ArrowUp
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const businessInfo = {
    name: "44 Mills Kitchen & Tap",
    tagline: "Fine dining, crafted cocktails, and memorable nights.",
    phone: "+17047879655",
    phoneDisplay: "(704) 787-9655",
    whatsapp: "+17047879655",
    email: "reseveratiom44@gmail.com",
    address: "6189 Bayfield Pkwy, Concord, NC 28027",
    mapsLink: "https://www.google.com/maps/place/44+Mills+Kitchen+%26+Tap/@35.415648,-80.6793783,17z/data=!3m1!4b1!4m6!3m5!1s0x88540592c42bd20b:0x87ed3e609fb80987!8m2!3d35.415648!4d-80.6768034!16s%2Fg%2F11f8mrk30c?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
  };

  const services = [
    { icon: <Utensils className="w-6 h-6" />, title: "Upscale Dining", desc: "A refined culinary experience featuring locally sourced ingredients and masterful preparation." },
    { icon: <GlassWater className="w-6 h-6" />, title: "Craft Cocktails", desc: "Expertly mixed signature drinks and a curated selection of fine wines and spirits." },
    { icon: <CalendarDays className="w-6 h-6" />, title: "Private Events", desc: "Exclusive spaces designed to host your most important celebrations and gatherings." },
    { icon: <Users className="w-6 h-6" />, title: "Business Dinners", desc: "Impress clients and colleagues in a sophisticated, professional atmosphere." },
    { icon: <PartyPopper className="w-6 h-6" />, title: "Birthday Dinners", desc: "Make your special day unforgettable with exceptional service and ambiance." },
    { icon: <Sun className="w-6 h-6" />, title: "Outdoor Seating", desc: "Enjoy your meal al fresco on our beautifully appointed patio." },
  ];

  const hours = [
    { days: "Monday - Thursday", time: "11:00 AM - 10:00 PM" },
    { days: "Friday", time: "11:00 AM - 11:00 PM" },
    { days: "Saturday", time: "10:00 AM - 11:00 PM" },
    { days: "Sunday", time: "10:00 AM - 9:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-ink-950 text-zinc-100 font-sans selection:bg-gold-500/30 selection:text-gold-400">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-ink-950/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-full px-4 sm:px-6 py-2 sm:py-3' : 'px-2'}`}>
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                44 Mills <span className="text-gold-500">&amp;</span> Tap
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
              <a href="#services" className="px-5 py-2 text-sm font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-full transition-all duration-300">Services</a>
              <a href="#about" className="px-5 py-2 text-sm font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-full transition-all duration-300">About</a>
              <a href="#gallery" className="px-5 py-2 text-sm font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-full transition-all duration-300">Gallery</a>
              <a href="#location" className="px-5 py-2 text-sm font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-full transition-all duration-300">Location</a>
            </div>
            <div className="hidden md:flex items-center">
              <a 
                href={`tel:${businessInfo.phone}`}
                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-ink-950 bg-gold-500 overflow-hidden transition-all hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <Phone className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">{businessInfo.phoneDisplay}</span>
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white p-2 bg-white/5 rounded-full border border-white/10"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-ink-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-xl transition-all">Services</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-xl transition-all">About</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-xl transition-all">Gallery</a>
              <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-ink-950 hover:bg-gold-500 rounded-xl transition-all">Location</a>
              <div className="pt-4 mt-2 border-t border-white/10">
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-ink-950 bg-gold-500 rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {businessInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-0 overflow-hidden min-h-[100vh] flex items-center">
        {/* Background Image & Overlays */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJDbLBRFBg_YmI--Mvk7Tn8nJxPzGcqEooG_rb8FgUBVqawvMBORAXXSrI08k1nI2_viDNJbgfQ_8z_ZzS2xZnKW5AKWkI8oc16GTcAqT7qcD0irso9mB8gaTVRHfIRrQ2g9JQ=w1920-h1080-k-no" 
            alt="44 Mills Kitchen & Tap" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/40 to-ink-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.9)_100%)]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        </motion.div>
        
        {/* Decorative Light Leaks */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-16 lg:mt-0">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold-500/20 bg-ink-950/50 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)] mb-8">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
                  Concord, North Carolina
                </span>
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold tracking-tight mb-6 text-white leading-[1.1]"
            >
              Elevated Dining <span className="font-light italic text-zinc-400">&amp;</span> <br className="hidden md:block" />
              <span className="relative inline-block mt-2 md:mt-0 group">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 relative z-10">
                  Crafted Cocktails
                </span>
                <span className="absolute -inset-2 bg-gold-500/20 blur-2xl -z-10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="mt-8 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
            >
              Experience Concord's premier destination for exceptional cuisine, signature drinks, and unforgettable evenings.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            >
              <a 
                href={`tel:${businessInfo.phone}`}
                className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium rounded-full text-ink-950 bg-gold-500 overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10 tracking-wide">Call to Reserve</span>
              </a>
              <a 
                href={businessInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-white/20 bg-ink-950/30 backdrop-blur-sm text-sm sm:text-base font-medium rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105"
              >
                <MapPin className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-gold-500 group-hover:animate-bounce" />
                <span className="tracking-wide">Get Directions</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating review badge */}
        <motion.div 
          className="absolute bottom-12 right-8 hidden lg:flex items-center gap-5 bg-ink-950/60 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-transform duration-500"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex -space-x-4 relative z-10">
            <img className="w-12 h-12 rounded-full border-2 border-ink-950 object-cover shadow-md" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Reviewer" referrerPolicy="no-referrer" />
            <img className="w-12 h-12 rounded-full border-2 border-ink-950 object-cover shadow-md" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Reviewer" referrerPolicy="no-referrer" />
            <img className="w-12 h-12 rounded-full border-2 border-ink-950 object-cover shadow-md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Reviewer" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10">
            <div className="flex text-gold-500 mb-1">
              <Star className="w-4 h-4 fill-current drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
              <Star className="w-4 h-4 fill-current drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
              <Star className="w-4 h-4 fill-current drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
              <Star className="w-4 h-4 fill-current drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
              <Star className="w-4 h-4 fill-current drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
            </div>
            <div className="text-xs font-medium text-zinc-300 tracking-wide">Loved by locals</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500/70 font-medium">Scroll</span>
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold-500 to-transparent"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 relative bg-ink-950 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold-500/50"></div>
              <h2 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-xs">Our Offerings</h2>
              <div className="w-8 h-px bg-gold-500/50"></div>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Curated for Your Enjoyment</h3>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">Whether you're joining us for a casual evening or a milestone celebration, we provide the perfect setting.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-ink-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-ink-950 border border-white/10 flex items-center justify-center text-gold-500 mb-6 sm:mb-8 group-hover:scale-110 group-hover:border-gold-500/30 group-hover:bg-gold-500/10 transition-all duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">{service.title}</h4>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Trust Section */}
      <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold-500/50"></div>
                <h2 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-xs">About 44 Mills</h2>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 sm:mb-8 leading-[1.1]">A Standard of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Excellence</span></h3>
              <div className="space-y-6 text-zinc-300 text-lg font-light leading-relaxed mb-10">
                <p>
                  Located in the heart of Concord, NC, 44 Mills Kitchen &amp; Tap is a premier destination for those seeking an upscale dining experience without the pretense. 
                </p>
                <p>
                  We believe great food and exceptional drinks should be enjoyed in an atmosphere that feels both luxurious and welcoming. Every detail is designed to make your visit memorable.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-ink-950 border border-white/10 flex items-center justify-center text-gold-500 mt-1 flex-shrink-0 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-white font-medium tracking-wide">Premium Quality</h5>
                    <p className="text-sm text-zinc-400 mt-1 font-light">Finest ingredients sourced daily.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-ink-950 border border-white/10 flex items-center justify-center text-gold-500 mt-1 flex-shrink-0 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-white font-medium tracking-wide">Exceptional Service</h5>
                    <p className="text-sm text-zinc-400 mt-1 font-light">Attentive, flawless experience.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gold-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Elegant restaurant interior" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl z-20 pointer-events-none"></div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/50 z-20"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-500/50 z-20"></div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-ink-950/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] max-w-[280px] hidden md:block z-30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-gold-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-xs font-medium text-zinc-400 tracking-wider">5.0 RATING</span>
                </div>
                <p className="text-sm text-zinc-300 font-light italic leading-relaxed">"A truly memorable night out. The craft cocktails and atmosphere are unmatched in Concord."</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-ink-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-500/50"></div>
            <h2 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-xs">Atmosphere</h2>
            <div className="w-8 h-px bg-gold-500/50"></div>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">A Glimpse of 44 Mills</h3>
          <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">Immerse yourself in our carefully curated atmosphere and culinary creations.</p>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop", title: "Upscale Ambiance", span: "md:col-span-2 md:row-span-2" },
              { src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop", title: "Signature Cocktails", span: "col-span-1" },
              { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", title: "Intimate Dining", span: "col-span-1" },
              { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", title: "Chef's Specialties", span: "md:col-span-2" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative rounded-2xl overflow-hidden group ${item.span} aspect-square md:aspect-auto md:min-h-[300px]`}
              >
                <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
                
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-8 h-px bg-gold-500 mb-3"></div>
                  <h4 className="text-xl font-serif text-white tracking-wide">{item.title}</h4>
                </div>
                
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl z-20 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-16 md:py-24 lg:py-32 bg-ink-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold-500/50"></div>
                <h2 className="text-gold-500 font-medium tracking-[0.2em] uppercase text-xs">Visit Us</h2>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-8 sm:mb-10">Plan Your Evening</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-ink-950 border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all shadow-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h4 className="text-lg font-medium text-white mb-2 tracking-wide">Location</h4>
                    <p className="text-zinc-400 mb-3 font-light leading-relaxed">{businessInfo.address}</p>
                    <a 
                      href={businessInfo.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors group-hover:translate-x-1"
                    >
                      Get Directions <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-ink-950 border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all shadow-lg flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="ml-4 sm:ml-6 w-full">
                    <h4 className="text-lg font-medium text-white mb-4 tracking-wide">Hours of Operation</h4>
                    <div className="space-y-3">
                      {hours.map((h, i) => (
                        <div key={i} className="flex justify-between text-zinc-400 text-sm pb-3 border-b border-white/5 last:border-0 font-light">
                          <span>{h.days}</span>
                          <span className="text-white font-medium">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-ink-950 border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all shadow-lg flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h4 className="text-lg font-medium text-white mb-2 tracking-wide">Contact</h4>
                    <p className="text-zinc-400 mb-4 font-light leading-relaxed">Call us to reserve a table or inquire about private events.</p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={`tel:${businessInfo.phone}`}
                        className="inline-flex items-center text-sm font-medium text-white hover:text-gold-400 transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2 text-gold-500" />
                        {businessInfo.phoneDisplay}
                      </a>
                      <a 
                        href={`mailto:${businessInfo.email}`}
                        className="inline-flex items-center text-sm font-medium text-white hover:text-gold-400 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2 text-gold-500" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-ink-950/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 flex flex-col justify-center text-center relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold-500/20 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold-500/20 rounded-br-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">Ready for a Memorable Night?</h3>
                <p className="text-zinc-400 mb-8 sm:mb-10 font-light leading-relaxed">Join us for an unforgettable dining experience. We recommend calling ahead for weekend reservations.</p>
                
                <div className="flex flex-col gap-3 sm:gap-4">
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-full text-ink-950 bg-gold-500 hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                  >
                    <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Call to Reserve
                  </a>
                  <a 
                    href={`https://wa.me/${businessInfo.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-sm sm:text-base font-medium rounded-full text-white hover:bg-white/5 hover:border-white/40 transition-all"
                  >
                    <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp Us
                  </a>
                  <a 
                    href={businessInfo.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-zinc-300 hover:text-white transition-all group"
                  >
                    <MapPin className="mr-2 w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-950 py-8 md:py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative z-10">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl font-bold tracking-tight text-white mb-2">
              44 Mills <span className="text-gold-500">&amp;</span> Tap
            </span>
            <p className="text-zinc-500 text-sm text-center md:text-left font-light">
              {businessInfo.address}
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href={`tel:${businessInfo.phone}`} className="w-10 h-10 rounded-full bg-ink-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/30 transition-all hover:-translate-y-1">
              <span className="sr-only">Phone</span>
              <Phone className="w-4 h-4" />
            </a>
            <a href={`https://wa.me/${businessInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ink-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/30 transition-all hover:-translate-y-1">
              <span className="sr-only">WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={`mailto:${businessInfo.email}`} className="w-10 h-10 rounded-full bg-ink-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/30 transition-all hover:-translate-y-1">
              <span className="sr-only">Email</span>
              <Mail className="w-4 h-4" />
            </a>
            <a href={businessInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ink-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/30 transition-all hover:-translate-y-1">
              <span className="sr-only">Location</span>
              <MapPin className="w-4 h-4" />
            </a>
          </div>
          
          <div className="text-zinc-600 text-sm font-light">
            &copy; {new Date().getFullYear()} 44 Mills Kitchen &amp; Tap. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 20 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-3 rounded-full bg-gold-500 text-ink-950 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all hover:-translate-y-1 ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
