import React, { useState, useEffect, useRef } from 'react';

// --- DUMMY DATA AVEC IMAGES ---
const MENU_DATA = [
  {
    id: 'cafe',
    title: 'Café',
    icon: '☕',
    items: [
      { name: 'Espresso Single Origin', desc: 'Notes de cacao amer et noisette torréfiée.', price: '3.500 DT', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80', badges: ['Signature', 'Nouveau'] },
      { name: 'Flat White Premium', desc: 'Double ristretto et micro-mousse de lait soyeuse.', price: '5.000 DT', image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=400&q=80', badges: ['Signature'] },
      { name: 'V60 Pour Over', desc: 'Extraction lente pour un café filtre pur et aromatique.', price: '7.500 DT', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80', badges: [] },
      { name: 'Iced Caramel Macchiato', desc: 'Espresso froid, sirop de caramel artisanal et lait.', price: '6.500 DT', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', badges: ['Nouveau'] },
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks',
    icon: '🥤',
    items: [
      { name: 'Matcha Latte Bio', desc: 'Poudre de matcha japonaise de cérémonie et lait d\'avoine.', price: '8.000 DT', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80', badges: ['Signature', 'Végétarien'] },
      { name: 'Limonade Hibiscus', desc: 'Infusion d\'hibiscus, citron frais et sirop d\'agave.', price: '5.500 DT', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80', badges: ['Végétarien'] },
      { name: 'Smoothie Mangue Exotique', desc: 'Mangue fraîche, lait de coco et touche de citron vert.', price: '8.500 DT', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80', badges: ['Nouveau', 'Végétarien'] },
    ]
  },
  {
    id: 'pizza',
    title: 'Pizza',
    icon: '🍕',
    items: [
      { name: 'Margherita Di Bufala', desc: 'Sauce tomate San Marzano, mozzarella di bufala, basilic.', price: '18.000 DT', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&q=80', badges: ['Végétarien'] },
      { name: 'Truffe & Champignons', desc: 'Crème de truffe, champignons sauvages, fior di latte.', price: '26.000 DT', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', badges: ['Signature'] },
    ]
  },
  {
    id: 'sandwich',
    title: 'Sandwich',
    icon: '🥪',
    items: [
      { name: 'Club Dinde Truffée', desc: 'Pain de mie artisanal, dinde fumée, mayo à la truffe, roquette.', price: '14.000 DT', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', badges: [] },
      { name: 'Ciabatta Caprese', desc: 'Pain ciabatta croustillant, mozzarella fraîche, tomate.', price: '12.000 DT', image: 'https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?w=400&q=80', badges: ['Végétarien'] },
    ]
  },
  {
    id: 'sucre',
    title: 'Sucré',
    icon: '🧇',
    items: [
      { name: 'Cheesecake Pistache', desc: 'Base spéculoos, crème onctueuse à la pâte de pistache.', price: '9.000 DT', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80', badges: ['Signature'] },
      { name: 'Fondant Cœur Coulant', desc: 'Chocolat noir 70%, servi avec glace vanille de Madagascar.', price: '8.500 DT', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80', badges: ['Nouveau'] },
    ]
  }
];

// INSTAGRAM FEED DATA (tajem tbeddel les images w les liens selon ton vrai compte)
const INSTAGRAM_POSTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', likes: 124, comments: 12, url: 'https://instagram.com/p/EXEMPLE1' },
  { id: 2, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', likes: 89, comments: 7, url: 'https://instagram.com/p/EXEMPLE2' },
  { id: 3, image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80', likes: 56, comments: 4, url: 'https://instagram.com/p/EXEMPLE3' },
  { id: 4, image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80', likes: 203, comments: 18, url: 'https://instagram.com/p/EXEMPLE4' },
  { id: 5, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80', likes: 67, comments: 5, url: 'https://instagram.com/p/EXEMPLE5' },
  { id: 6, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80', likes: 145, comments: 11, url: 'https://instagram.com/p/EXEMPLE6' },
];

const CONCEPT_DATA = [
  { icon: '🌿', title: 'Produits frais', desc: 'Sélection rigoureuse de producteurs locaux' },
  { icon: '☕', title: 'Café de spécialité', desc: 'Grains sourcés directement chez les producteurs' },
  { icon: '🤝', title: 'Artisanat local', desc: 'Pâtisseries et pains faits maison chaque jour' }
];

const GALLERY_360 = [
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
];

const getWaitTime = () => {
  const times = ['5-8 min', '8-12 min', '10-15 min', '3-6 min'];
  return times[Math.floor(Date.now() / 1800000) % times.length];
};

const getOpenStatus = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  if (day === 0) return { open: false, message: 'Fermé le dimanche' };
  const currentMinutes = hour * 60 + minute;
  const openMinutes = 8 * 60;
  const closeMinutes = 22 * 60;
  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return { open: true, message: 'Ouvert maintenant' };
  }
  return { open: false, message: 'Fermé actuellement' };
};

export default function PremiumCafeMenu() {
  const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [waitTime] = useState(getWaitTime);
  const navRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScrollVisibility = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_DATA.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeTab !== section.id) setActiveTab(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const getFilteredData = () => {
    if (!searchQuery.trim()) return MENU_DATA;
    const lowerQuery = searchQuery.toLowerCase();
    return MENU_DATA.map(cat => ({
      ...cat,
      items: cat.items.filter(item => item.name.toLowerCase().includes(lowerQuery) || item.desc.toLowerCase().includes(lowerQuery))
    })).filter(cat => cat.items.length > 0);
  };

  const filteredMenu = getFilteredData();
  const status = getOpenStatus();

  const bgClass = darkMode ? 'bg-[#111111]' : 'bg-[#F5F0EB]';
  const textClass = darkMode ? 'text-white' : 'text-[#1A1A1A]';
  const cardBgClass = darkMode ? 'bg-[#1A1A1A] border-[#2A2A2A]' : 'bg-white border-[#E0D6CD]';
  const cardHoverClass = darkMode ? 'hover:border-orange-500/40' : 'hover:border-orange-500/60';
  const navBgClass = darkMode ? 'bg-[#111111]/95 border-[#1A1A1A]' : 'bg-[#F5F0EB]/95 border-[#E0D6CD]';
  const footerBgClass = darkMode ? 'bg-[#0A0A0A] border-[#1A1A1A]' : 'bg-[#E8E0D8] border-[#D4C9BF]';

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6 mx-auto"></div>
          <h1 className="text-3xl font-serif tracking-widest text-white/90">L'ÉLÉGANCE</h1>
          <p className="text-gray-500 text-xs mt-3 tracking-wider">CHARGEMENT...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${bgClass} ${textClass} min-h-screen font-sans selection:bg-orange-500/30 transition-colors duration-300`}>
      
      {/* Dark/Light Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 flex items-center justify-center hover:bg-orange-500/40 transition-all duration-300"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* HERO SECTION */}
      <header className="relative h-[45vh] min-h-[350px] md:h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000" 
            alt="Coffee aesthetic" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <div className="w-10 h-1 mb-5 bg-orange-500 rounded-full"></div>
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-3 font-serif text-white">L'ÉLÉGANCE</h1>
          <p className="text-gray-300 text-xs md:text-sm tracking-[0.2em] uppercase mb-6">Artisan Café & Menu</p>

          <div className="flex flex-wrap gap-3 justify-center">
            <div className={`flex items-center gap-2 text-sm px-4 py-1.5 rounded-full backdrop-blur-sm ${status.open ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              <span className={`w-2 h-2 rounded-full ${status.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
              <span className="font-medium">{status.message}</span>
            </div>
            <div className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-sm text-amber-300">
              <span>⏱️</span>
              <span className="font-medium">Attente: {waitTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION NOTRE CONCEPT */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-3xl font-light tracking-wide ${textClass}`}>Notre Concept</h2>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-3 mb-4"></div>
          <p className="text-gray-500 text-sm max-w-md mx-auto">L'excellence à chaque détail</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONCEPT_DATA.map((item, idx) => (
            <div key={idx} className={`${cardBgClass} border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${cardHoverClass}`}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className={`font-semibold mb-2 ${textClass}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STICKY NAV + SEARCH */}
      <div className={`sticky top-0 z-50 ${navBgClass} backdrop-blur-md border-b transition-colors duration-300`}>
        <div className="max-w-3xl mx-auto px-4 pt-3">
          <div className="relative mb-3">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="Rechercher un plat ou boisson..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={`w-full ${cardBgClass} border ${darkMode ? 'border-[#2A2A2A]' : 'border-[#D4C9BF]'} rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500 transition-colors ${textClass}`} />
          </div>
          <nav ref={navRef} className="flex overflow-x-auto py-2 gap-2 no-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style dangerouslySetInnerHTML={{ __html: `nav::-webkit-scrollbar { display: none; }` }} />
            {MENU_DATA.map((category) => (
              <button key={category.id} onClick={() => scrollToSection(category.id)} className={`flex items-center gap-2 px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium border ${activeTab === category.id ? 'bg-orange-500 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.2)]' : darkMode ? 'bg-[#1A1A1A] border-[#2A2A2A] text-gray-400 hover:text-white' : 'bg-white border-[#D4C9BF] text-gray-600 hover:text-black'}`}>
                <span className="text-base">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* MAIN MENU */}
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-16">
        {filteredMenu.length === 0 && (
          <div className="text-center py-20 text-gray-400">Aucun résultat trouvé pour "{searchQuery}"</div>
        )}
        {filteredMenu.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <div className="mb-6 pl-3 border-l-2 border-orange-500">
              <h2 className={`text-2xl font-light tracking-wide flex items-center gap-3 ${textClass}`}>
                <span className="text-xl opacity-80">{category.icon}</span>
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, index) => (
                <div key={index} className={`group ${cardBgClass} border p-3 rounded-2xl transition-all duration-300 ${cardHoverClass} hover:-translate-y-0.5 flex gap-4 items-start cursor-default`}>
                  <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#222222] border border-[#333333]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0 py-0.5">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className={`text-base font-medium ${textClass} group-hover:text-orange-400 transition-colors`}>{item.name}</h3>
                      <div className="flex gap-1 flex-wrap">
                        {item.badges?.includes('Signature') && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">🌟 Signature</span>}
                        {item.badges?.includes('Nouveau') && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">🔥 Nouveau</span>}
                        {item.badges?.includes('Végétarien') && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">🍃 Végétarien</span>}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-2">{item.desc}</p>
                    <span className={`text-sm font-medium ${darkMode ? 'text-white bg-[#222222]' : 'text-black bg-gray-100'} px-2.5 py-1 rounded-lg border ${darkMode ? 'border-[#333333]' : 'border-gray-200'}`}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* SECTION INSTAGRAM FEED - REEL ET AUTHENTIQUE */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-light tracking-wide ${textClass}`}>📸 Ils parlent de nous sur Instagram</h2>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mt-2"></div>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>@elegance_cafe • Derniers partages</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${cardBgClass} border rounded-xl overflow-hidden transition-all duration-300 ${cardHoverClass} hover:-translate-y-1`}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4 text-white">
                    <span className="flex items-center gap-1 text-sm">❤️ {post.likes}</span>
                    <span className="flex items-center gap-1 text-sm">💬 {post.comments}</span>
                  </div>
                </div>
              </div>
              <div className="p-2 border-t border-[#2A2A2A] flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">📷 instagram.com</span>
                </div>
                <span className="text-[10px] text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">Voir →</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://instagram.com/elegance_cafe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            📱 Suivez-nous sur Instagram
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-[10px] text-gray-500">⭐ Partagez votre expérience avec #EleganceCafe</p>
        </div>
      </div>

      {/* GALERIE 360° AUTOPLAY */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h3 className={`text-xl font-light tracking-wide ${textClass}`}>Notre univers en images</h3>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <div className="flex animate-scroll gap-3 w-max">
            {[...GALLERY_360, ...GALLERY_360].map((img, idx) => (
              <div key={idx} className="w-64 h-48 md:w-80 md:h-56 rounded-xl overflow-hidden border border-orange-500/30 shrink-0">
                <img src={img} alt="Café ambiance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* FOOTER */}
      <footer className={`${footerBgClass} border-t py-12 transition-colors duration-300`}>
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center space-y-8">
          <h2 className={`text-xl font-serif tracking-widest ${darkMode ? 'text-white/80' : 'text-black/70'}`}>L'ÉLÉGANCE</h2>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 flex items-center justify-center rounded-full ${darkMode ? 'bg-[#1A1A1A] border-[#2A2A2A] text-gray-400 hover:text-white' : 'bg-white border-[#D4C9BF] text-gray-600 hover:text-black'} border hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 flex items-center justify-center rounded-full ${darkMode ? 'bg-[#1A1A1A] border-[#2A2A2A] text-gray-400 hover:text-white' : 'bg-white border-[#D4C9BF] text-gray-600 hover:text-black'} border hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 text-xs text-gray-500 font-light w-full">
            <div className="flex flex-col items-center gap-1"><span className="text-orange-500/80 mb-1">📍 Adresse</span><span>Avenue H. Bourguiba, Jendouba</span></div>
            <div className="flex flex-col items-center gap-1"><span className="text-orange-500/80 mb-1">📶 WiFi</span><span>Réseau: Elegance_Guest</span></div>
            <div className="flex flex-col items-center gap-1"><span className="text-orange-500/80 mb-1">📞 Contact</span><span>+216 22 000 000</span></div>
          </div>
          <div className={`pt-6 border-t w-full text-[10px] uppercase tracking-wider ${darkMode ? 'border-[#1A1A1A] text-gray-600' : 'border-[#D4C9BF] text-gray-500'}`}>&copy; {new Date().getFullYear()} L'Élégance Artisan Café. Menu digital.</div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      )}
    </div>
  );
}