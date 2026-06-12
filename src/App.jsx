import React, { useState, useEffect, useRef } from 'react';

// ========== 3D ICON COMPONENTS ==========
const Icon3D = ({ type, size = 32 }) => {
  const s = size;
  const icons = {
    cafe: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="cup-body" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FDDEA8"/>
            <stop offset="60%" stopColor="#E8A848"/>
            <stop offset="100%" stopColor="#9B5E10"/>
          </radialGradient>
          <radialGradient id="coffee-top" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#7A4728"/>
            <stop offset="100%" stopColor="#3E1E08"/>
          </radialGradient>
          <linearGradient id="handle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C46A"/>
            <stop offset="100%" stopColor="#A0620F"/>
          </linearGradient>
        </defs>
        {/* Steam */}
        <path d="M22 10 Q20 6 22 2 Q24 6 22 10" stroke="#CBD5E1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M30 12 Q28 7 30 2 Q32 7 30 12" stroke="#CBD5E1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M38 10 Q36 6 38 2 Q40 6 38 10" stroke="#CBD5E1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Cup body */}
        <path d="M12 20 L14 52 Q14 55 20 55 L44 55 Q50 55 50 52 L52 20 Z" fill="url(#cup-body)"/>
        {/* Coffee surface */}
        <ellipse cx="32" cy="20" rx="20" ry="5" fill="url(#coffee-top)"/>
        <ellipse cx="29" cy="19.5" rx="6" ry="2" fill="#7A4728" opacity="0.5"/>
        {/* Highlight on cup */}
        <path d="M16 24 Q17 38 18 48" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
        {/* Handle */}
        <path d="M50 28 Q60 28 60 37 Q60 46 50 46" stroke="url(#handle)" strokeWidth="4" fill="none" strokeLinecap="round"/>
        {/* Saucer */}
        <ellipse cx="32" cy="56" rx="24" ry="5" fill="#C8832A" opacity="0.6"/>
        <ellipse cx="32" cy="55" rx="24" ry="4" fill="#E8A848"/>
      </svg>
    ),
    drinks: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(100,200,255,0.5)"/>
            <stop offset="100%" stopColor="rgba(0,120,200,0.3)"/>
          </linearGradient>
          <linearGradient id="liquid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF7043"/>
            <stop offset="50%" stopColor="#E91E63"/>
            <stop offset="100%" stopColor="#9C27B0"/>
          </linearGradient>
        </defs>
        {/* Straw */}
        <rect x="37" y="4" width="4" height="36" rx="2" fill="#F48FB1"/>
        <rect x="37" y="4" width="2" height="36" rx="1" fill="rgba(255,255,255,0.4)"/>
        {/* Glass */}
        <path d="M14 18 L18 58 Q18 61 22 61 L42 61 Q46 61 46 58 L50 18 Z" fill="url(#glass)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        {/* Liquid */}
        <path d="M15.5 26 L19 58 Q19 60 22 60 L42 60 Q45 60 45 58 L48.5 26 Z" fill="url(#liquid)" opacity="0.85"/>
        {/* Ice cubes */}
        <rect x="22" y="38" width="8" height="8" rx="2" fill="rgba(255,255,255,0.6)" transform="rotate(15 26 42)"/>
        <rect x="33" y="42" width="7" height="7" rx="2" fill="rgba(255,255,255,0.5)" transform="rotate(-10 36 45)"/>
        {/* Glass shine */}
        <path d="M18 22 L19 50" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
        {/* Rim */}
        <ellipse cx="32" cy="18" rx="18" ry="4" fill="rgba(200,240,255,0.5)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
        {/* Umbrella */}
        <path d="M22 14 Q27 6 32 14 Z" fill="#FF5252" opacity="0.9"/>
        <path d="M22 14 Q27 10 32 14" stroke="#B71C1C" strokeWidth="0.5" fill="none"/>
        <line x1="27" y1="14" x2="27" y2="18" stroke="#795548" strokeWidth="1"/>
      </svg>
    ),
    pizza: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="pizza-dough" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#FFCC80"/>
            <stop offset="100%" stopColor="#D4820A"/>
          </radialGradient>
          <radialGradient id="pizza-sauce" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#EF5350"/>
            <stop offset="100%" stopColor="#B71C1C"/>
          </radialGradient>
        </defs>
        {/* Crust */}
        <path d="M32 4 L60 58 L4 58 Z" fill="url(#pizza-dough)"/>
        {/* Crust edge shadow */}
        <path d="M32 4 L60 58 L4 58 Z" fill="none" stroke="#A0620F" strokeWidth="4" strokeLinejoin="round"/>
        {/* Sauce */}
        <path d="M32 14 L54 54 L10 54 Z" fill="url(#pizza-sauce)"/>
        {/* Cheese */}
        <path d="M32 24 L48 50 L16 50 Z" fill="#FFF59D"/>
        <path d="M32 24 Q40 35 48 50" stroke="#F9A825" strokeWidth="1" fill="none"/>
        <path d="M32 24 Q24 35 16 50" stroke="#F9A825" strokeWidth="1" fill="none"/>
        {/* Toppings: pepperoni */}
        <circle cx="32" cy="36" r="4" fill="#C62828"/>
        <circle cx="32" cy="36" r="3" fill="#E53935"/>
        <circle cx="24" cy="44" r="3.5" fill="#C62828"/>
        <circle cx="24" cy="44" r="2.5" fill="#E53935"/>
        <circle cx="40" cy="44" r="3.5" fill="#C62828"/>
        <circle cx="40" cy="44" r="2.5" fill="#E53935"/>
        {/* Basil leaves */}
        <ellipse cx="28" cy="30" rx="3" ry="1.5" fill="#43A047" transform="rotate(-30 28 30)"/>
        <ellipse cx="38" cy="38" rx="3" ry="1.5" fill="#43A047" transform="rotate(20 38 38)"/>
        {/* Crust highlight */}
        <path d="M32 6 Q40 30 57 55" stroke="rgba(255,220,120,0.5)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    sandwich: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bread-top" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFCC80"/>
            <stop offset="100%" stopColor="#D4820A"/>
          </linearGradient>
          <linearGradient id="bread-bot" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5A623"/>
            <stop offset="100%" stopColor="#C47A0F"/>
          </linearGradient>
        </defs>
        {/* Top bread */}
        <path d="M10 22 Q10 12 32 12 Q54 12 54 22 L54 30 Q54 32 52 32 L12 32 Q10 32 10 30 Z" fill="url(#bread-top)"/>
        <path d="M10 22 Q10 12 32 12 Q54 12 54 22" fill="rgba(255,200,100,0.4)"/>
        {/* Sesame seeds */}
        <ellipse cx="24" cy="18" rx="2" ry="1" fill="#F5DEB3" transform="rotate(20 24 18)"/>
        <ellipse cx="32" cy="16" rx="2" ry="1" fill="#F5DEB3" transform="rotate(-10 32 16)"/>
        <ellipse cx="40" cy="18" rx="2" ry="1" fill="#F5DEB3" transform="rotate(15 40 18)"/>
        {/* Lettuce */}
        <path d="M10 32 Q16 30 20 34 Q24 30 28 33 Q32 30 36 33 Q40 30 44 34 Q48 30 54 32 L54 36 L10 36 Z" fill="#66BB6A"/>
        {/* Tomato */}
        <rect x="10" y="36" width="44" height="5" rx="1" fill="#EF5350"/>
        <line x1="28" y1="36" x2="28" y2="41" stroke="#B71C1C" strokeWidth="0.5"/>
        <line x1="38" y1="36" x2="38" y2="41" stroke="#B71C1C" strokeWidth="0.5"/>
        {/* Cheese */}
        <path d="M10 41 L12 46 L52 46 L54 41 Z" fill="#FDD835"/>
        <path d="M12 46 Q16 48 12 50" fill="#F9A825"/>
        {/* Turkey / meat */}
        <rect x="10" y="46" width="44" height="6" rx="1" fill="#BCAAA4"/>
        <path d="M18 47 Q22 50 26 47 Q30 50 34 47 Q38 50 42 47 Q46 50 50 47" stroke="#A1887F" strokeWidth="1" fill="none"/>
        {/* Bottom bread */}
        <rect x="10" y="52" width="44" height="8" rx="3" fill="url(#bread-bot)"/>
      </svg>
    ),
    sucre: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cake-base" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CE93D8"/>
            <stop offset="100%" stopColor="#7B1FA2"/>
          </linearGradient>
          <linearGradient id="cake-top" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8BBD9"/>
            <stop offset="100%" stopColor="#E91E8C"/>
          </linearGradient>
          <linearGradient id="frosting" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FCE4EC"/>
            <stop offset="100%" stopColor="white"/>
          </linearGradient>
        </defs>
        {/* Plate */}
        <ellipse cx="32" cy="58" rx="24" ry="5" fill="#EDE7F6" opacity="0.7"/>
        {/* Cake bottom layer */}
        <rect x="10" y="42" width="44" height="14" rx="4" fill="url(#cake-base)"/>
        <rect x="10" y="42" width="44" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
        {/* Filling between layers */}
        <rect x="10" y="38" width="44" height="5" rx="1" fill="#F48FB1"/>
        {/* Cake top layer */}
        <rect x="10" y="24" width="44" height="15" rx="4" fill="url(#cake-top)"/>
        {/* Frosting drip on top */}
        <path d="M10 26 Q14 20 18 26 Q22 20 26 26 Q30 20 34 26 Q38 20 42 26 Q46 20 50 26 L54 24 L54 24 Q54 22 52 22 L12 22 Q10 22 10 24 Z" fill="url(#frosting)"/>
        {/* Frosting drips */}
        <path d="M16 24 Q15 28 16 30" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8"/>
        <path d="M32 22 Q31 27 32 30" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8"/>
        <path d="M48 24 Q47 28 48 30" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8"/>
        {/* Strawberry on top */}
        <path d="M28 12 Q28 6 32 4 Q36 6 36 12 Q36 18 32 20 Q28 18 28 12 Z" fill="#EF5350"/>
        <path d="M30 10 Q31 8 32 6 Q33 8 34 10" fill="#C62828" opacity="0.5"/>
        <path d="M30 8 Q32 4 34 8" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Sprinkles */}
        <rect x="18" y="27" width="5" height="2" rx="1" fill="#FF5252" transform="rotate(30 20 28)"/>
        <rect x="38" y="29" width="5" height="2" rx="1" fill="#69F0AE" transform="rotate(-20 40 30)"/>
        <rect x="26" y="32" width="5" height="2" rx="1" fill="#40C4FF" transform="rotate(45 28 33)"/>
        <rect x="42" y="34" width="5" height="2" rx="1" fill="#FFD740" transform="rotate(-35 44 35)"/>
      </svg>
    ),
    // Concept icons
    leaf: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <defs>
          <radialGradient id="leaf-grad" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#A5D6A7"/>
            <stop offset="60%" stopColor="#388E3C"/>
            <stop offset="100%" stopColor="#1B5E20"/>
          </radialGradient>
        </defs>
        <path d="M32 58 Q10 40 12 18 Q20 8 32 6 Q44 8 52 18 Q54 40 32 58 Z" fill="url(#leaf-grad)"/>
        <path d="M32 58 Q30 40 32 6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
        <path d="M32 30 Q18 25 12 18" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
        <path d="M32 38 Q46 33 52 25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
        <path d="M32 22 Q22 20 16 14" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
        <ellipse cx="28" cy="15" rx="8" ry="5" fill="rgba(255,255,255,0.1)" transform="rotate(-20 28 15)"/>
      </svg>
    ),
    bean: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <defs>
          <radialGradient id="bean-grad" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#8D6E63"/>
            <stop offset="50%" stopColor="#5D4037"/>
            <stop offset="100%" stopColor="#3E2723"/>
          </radialGradient>
          <radialGradient id="bean2-grad" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#A1887F"/>
            <stop offset="50%" stopColor="#6D4C41"/>
            <stop offset="100%" stopColor="#4E342E"/>
          </radialGradient>
        </defs>
        <ellipse cx="24" cy="34" rx="14" ry="20" fill="url(#bean-grad)" transform="rotate(-20 24 34)"/>
        <path d="M18 20 Q14 34 20 46" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" fill="none" transform="rotate(-20 24 34)"/>
        <ellipse cx="42" cy="30" rx="12" ry="18" fill="url(#bean2-grad)" transform="rotate(15 42 30)"/>
        <path d="M36 18 Q32 30 38 42" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" fill="none" transform="rotate(15 42 30)"/>
        <ellipse cx="22" cy="19" rx="5" ry="3" fill="rgba(255,255,255,0.15)" transform="rotate(-20 22 19)"/>
        <ellipse cx="40" cy="17" rx="4" ry="2.5" fill="rgba(255,255,255,0.12)" transform="rotate(15 40 17)"/>
      </svg>
    ),
    handshake: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="hand1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFCC80"/>
            <stop offset="100%" stopColor="#E65100"/>
          </linearGradient>
          <linearGradient id="hand2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB74D"/>
            <stop offset="100%" stopColor="#BF360C"/>
          </linearGradient>
        </defs>
        {/* Left hand */}
        <path d="M4 38 L4 28 Q4 24 8 24 L14 24 L20 18 Q22 16 24 18 Q26 20 24 22 L22 24 L28 24 Q30 24 30 26 Q30 28 28 28 L32 28 Q34 28 34 30 Q34 32 32 32 L28 32 Q30 32 30 34 Q30 36 28 36 L20 36 L16 42 L4 42 Z" fill="url(#hand1)"/>
        {/* Right hand */}
        <path d="M60 38 L60 28 Q60 24 56 24 L50 24 L44 18 Q42 16 40 18 Q38 20 40 22 L42 24 L36 24 Q34 24 34 26 Q34 28 36 28 L32 28 Q30 28 30 30 Q30 32 32 32 L36 32 Q34 32 34 34 Q34 36 36 36 L44 36 L48 42 L60 42 Z" fill="url(#hand2)"/>
        {/* Glow at join */}
        <circle cx="32" cy="30" r="6" fill="rgba(255,200,50,0.3)"/>
        <circle cx="32" cy="30" r="3" fill="rgba(255,200,50,0.5)"/>
      </svg>
    ),
    star: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <defs>
          <radialGradient id="star-grad" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFE082"/>
            <stop offset="60%" stopColor="#FFB300"/>
            <stop offset="100%" stopColor="#E65100"/>
          </radialGradient>
        </defs>
        <path d="M32 6 L38 24 L58 24 L42 36 L48 54 L32 42 L16 54 L22 36 L6 24 L26 24 Z" fill="url(#star-grad)"/>
        <path d="M32 6 L38 24 L58 24 L42 36 L48 54 L32 42 L16 54 L22 36 L6 24 L26 24 Z" fill="rgba(255,255,255,0.15)" clipPath="polygon(0 0, 50% 0, 50% 100%, 0 100%)"/>
        <path d="M32 10 L36 22 L26 22 Z" fill="rgba(255,255,255,0.2)"/>
      </svg>
    ),
    new: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <defs>
          <radialGradient id="new-grad" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FF8A65"/>
            <stop offset="60%" stopColor="#F4511E"/>
            <stop offset="100%" stopColor="#BF360C"/>
          </radialGradient>
        </defs>
        <path d="M32 4 L36 16 L48 12 L44 24 L58 26 L48 34 L54 46 L42 44 L38 58 L30 46 L18 52 L20 40 L8 36 L18 28 L12 16 L24 20 Z" fill="url(#new-grad)"/>
        <path d="M32 4 L36 16 L24 20 Z" fill="rgba(255,255,255,0.2)"/>
        <text x="32" y="36" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">NEW</text>
      </svg>
    ),
    vege: (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <defs>
          <radialGradient id="vege-grad" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#A5D6A7"/>
            <stop offset="60%" stopColor="#2E7D32"/>
            <stop offset="100%" stopColor="#1B5E20"/>
          </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="26" fill="url(#vege-grad)"/>
        <path d="M24 28 Q32 16 40 28 Q32 40 24 28 Z" fill="rgba(255,255,255,0.25)"/>
        <path d="M32 20 L32 44" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
        <path d="M24 28 Q32 24 40 28" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
        <circle cx="26" cy="22" r="4" fill="rgba(255,255,255,0.15)"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

// ========== MENU DATA (updated with iconType) ==========
const MENU_DATA = [
  {
    id: 'cafe',
    title: 'Café',
    iconType: 'cafe',
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
    iconType: 'drinks',
    items: [
      { name: 'Matcha Latte Bio', desc: "Poudre de matcha japonaise de cérémonie et lait d'avoine.", price: '8.000 DT', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80', badges: ['Signature', 'Végétarien'] },
      { name: 'Limonade Hibiscus', desc: "Infusion d'hibiscus, citron frais et sirop d'agave.", price: '5.500 DT', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80', badges: ['Végétarien'] },
      { name: 'Smoothie Mangue Exotique', desc: 'Mangue fraîche, lait de coco et touche de citron vert.', price: '8.500 DT', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80', badges: ['Nouveau', 'Végétarien'] },
    ]
  },
  {
    id: 'pizza',
    title: 'Pizza',
    iconType: 'pizza',
    items: [
      { name: 'Margherita Di Bufala', desc: 'Sauce tomate San Marzano, mozzarella di bufala, basilic.', price: '18.000 DT', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&q=80', badges: ['Végétarien'] },
      { name: 'Truffe & Champignons', desc: 'Crème de truffe, champignons sauvages, fior di latte.', price: '26.000 DT', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', badges: ['Signature'] },
    ]
  },
  {
    id: 'sandwich',
    title: 'Sandwich',
    iconType: 'sandwich',
    items: [
      { name: 'Club Dinde Truffée', desc: 'Pain de mie artisanal, dinde fumée, mayo à la truffe, roquette.', price: '14.000 DT', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', badges: [] },
      { name: 'Ciabatta Caprese', desc: 'Pain ciabatta croustillant, mozzarella fraîche, tomate.', price: '12.000 DT', image: 'https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?w=400&q=80', badges: ['Végétarien'] },
    ]
  },
  {
    id: 'sucre',
    title: 'Sucré',
    iconType: 'sucre',
    items: [
      { name: 'Cheesecake Pistache', desc: 'Base spéculoos, crème onctueuse à la pâte de pistache.', price: '9.000 DT', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80', badges: ['Signature'] },
      { name: 'Fondant Cœur Coulant', desc: 'Chocolat noir 70%, servi avec glace vanille de Madagascar.', price: '8.500 DT', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80', badges: ['Nouveau'] },
    ]
  }
];

const INSTAGRAM_POSTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', likes: 124, comments: 12, url: 'https://instagram.com/p/EXEMPLE1' },
  { id: 2, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', likes: 89, comments: 7, url: 'https://instagram.com/p/EXEMPLE2' },
  { id: 3, image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80', likes: 56, comments: 4, url: 'https://instagram.com/p/EXEMPLE3' },
  { id: 4, image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80', likes: 203, comments: 18, url: 'https://instagram.com/p/EXEMPLE4' },
  { id: 5, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80', likes: 67, comments: 5, url: 'https://instagram.com/p/EXEMPLE5' },
  { id: 6, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80', likes: 145, comments: 11, url: 'https://instagram.com/p/EXEMPLE6' },
];

const CONCEPT_DATA = [
  { iconType: 'leaf', title: 'Produits frais', desc: 'Sélection rigoureuse de producteurs locaux' },
  { iconType: 'bean', title: 'Café de spécialité', desc: 'Grains sourcés directement chez les producteurs' },
  { iconType: 'handshake', title: 'Artisanat local', desc: 'Pâtisseries et pains faits maison chaque jour' }
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
  if (currentMinutes >= 480 && currentMinutes < 1320) {
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
  const [selectedItem, setSelectedItem] = useState(null);
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

  useEffect(() => {
    let ticking = false;
    const headerHeight = 110;
    const updateActiveTab = () => {
      const sections = MENU_DATA.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + headerHeight;
      let currentSectionId = sections[0]?.id;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = section.id;
            break;
          }
          if (scrollPosition >= sectionTop) currentSectionId = section.id;
        }
      }
      if (currentSectionId && currentSectionId !== activeTab) setActiveTab(currentSectionId);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveTab);
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    updateActiveTab();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(`[data-id="${activeTab}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTab]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setActiveTab(id);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const getFilteredData = () => {
    if (!searchQuery.trim()) return MENU_DATA;
    const lowerQuery = searchQuery.toLowerCase();
    return MENU_DATA.map(cat => ({
      ...cat,
      items: cat.items.filter(item =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.desc.toLowerCase().includes(lowerQuery)
      )
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
      {/* 3D icon bounce animation style */}
      <style>{`
        @keyframes icon3d-bounce {
          0%, 100% { transform: translateY(0) rotateY(0deg); }
          50% { transform: translateY(-4px) rotateY(15deg); }
        }
        .icon3d-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .icon3d-wrap:hover {
          transform: translateY(-3px) scale(1.1) rotateY(10deg);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.5)) brightness(1.1);
        }
        button:hover .icon3d-nav {
          animation: icon3d-bounce 0.5s ease;
        }
        .badge-3d-star { filter: drop-shadow(0 2px 4px rgba(255,180,0,0.5)); }
        .badge-3d-new  { filter: drop-shadow(0 2px 4px rgba(249,115,22,0.5)); }
        .badge-3d-vege { filter: drop-shadow(0 2px 4px rgba(74,222,128,0.4)); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
      `}</style>

      <button onClick={() => setDarkMode(!darkMode)} className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 flex items-center justify-center hover:bg-orange-500/40 transition-all duration-300">
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Hero */}
      <header className="relative h-[45vh] min-h-[350px] md:h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000" alt="Coffee aesthetic" className="w-full h-full object-cover scale-105" />
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

      {/* Concept */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-3xl font-light tracking-wide ${textClass}`}>Notre Concept</h2>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-3 mb-4"></div>
          <p className="text-gray-500 text-sm max-w-md mx-auto">L'excellence à chaque détail</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONCEPT_DATA.map((item, idx) => (
            <div key={idx} className={`${cardBgClass} border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${cardHoverClass}`}>
              {/* 3D concept icon */}
              <div className="flex justify-center mb-3">
                <div className="icon3d-wrap">
                  <Icon3D type={item.iconType} size={52} />
                </div>
              </div>
              <h3 className={`font-semibold mb-2 ${textClass}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky nav + search */}
      <div className={`sticky top-0 z-50 ${navBgClass} backdrop-blur-md border-b transition-colors duration-300`}>
        <div className="max-w-3xl mx-auto px-4 pt-3">
          <div className="relative mb-3">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Rechercher un plat ou boisson..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={`w-full ${cardBgClass} border ${darkMode ? 'border-[#2A2A2A]' : 'border-[#D4C9BF]'} rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500 transition-colors ${textClass}`} />
          </div>
          <nav ref={navRef} className="flex overflow-x-auto py-2 gap-2 no-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style dangerouslySetInnerHTML={{ __html: `nav::-webkit-scrollbar { display: none; }` }} />
            {MENU_DATA.map((category) => (
              <button key={category.id} data-id={category.id} onClick={() => scrollToSection(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium border ${activeTab === category.id ? 'bg-orange-500 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.2)]' : darkMode ? 'bg-[#1A1A1A] border-[#2A2A2A] text-gray-400 hover:text-white' : 'bg-white border-[#D4C9BF] text-gray-600 hover:text-black'}`}>
                {/* 3D nav icon */}
                <div className="icon3d-wrap icon3d-nav" style={{ width: 22, height: 22 }}>
                  <Icon3D type={category.iconType} size={22} />
                </div>
                {category.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu */}
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-16">
        {filteredMenu.length === 0 && <div className="text-center py-20 text-gray-400">Aucun résultat trouvé pour "{searchQuery}"</div>}
        {filteredMenu.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <div className="mb-6 pl-3 border-l-2 border-orange-500">
              <h2 className={`text-2xl font-light tracking-wide flex items-center gap-3 ${textClass}`}>
                {/* 3D section heading icon */}
                <div className="icon3d-wrap" style={{ width: 32, height: 32 }}>
                  <Icon3D type={category.iconType} size={32} />
                </div>
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, idx) => (
                <div key={idx} onClick={() => setSelectedItem(item)} className={`group ${cardBgClass} border p-3 rounded-2xl transition-all duration-300 ${cardHoverClass} hover:-translate-y-0.5 flex gap-4 items-start cursor-pointer`}>
                  <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#222222] border border-[#333333]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0 py-0.5">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className={`text-base font-medium ${textClass} group-hover:text-orange-400 transition-colors`}>{item.name}</h3>
                      {/* 3D badges */}
                      <div className="flex gap-1 flex-wrap">
                        {item.badges?.includes('Signature') && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            <span className="badge-3d-star inline-flex"><Icon3D type="star" size={12} /></span> Signature
                          </span>
                        )}
                        {item.badges?.includes('Nouveau') && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                            <span className="badge-3d-new inline-flex"><Icon3D type="new" size={12} /></span> Nouveau
                          </span>
                        )}
                        {item.badges?.includes('Végétarien') && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                            <span className="badge-3d-vege inline-flex"><Icon3D type="vege" size={12} /></span> Végétarien
                          </span>
                        )}
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

      {/* Instagram */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-light tracking-wide ${textClass}`}>📸 Ils parlent de nous sur Instagram</h2>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mt-2"></div>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>@elegance_cafe • Derniers partages</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className={`group ${cardBgClass} border rounded-xl overflow-hidden transition-all duration-300 ${cardHoverClass} hover:-translate-y-1`}>
              <div className="aspect-square relative overflow-hidden">
                <img src={post.image} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4 text-white">
                    <span className="flex items-center gap-1 text-sm">❤️ {post.likes}</span>
                    <span className="flex items-center gap-1 text-sm">💬 {post.comments}</span>
                  </div>
                </div>
              </div>
              <div className="p-2 border-t border-[#2A2A2A] flex justify-between items-center">
                <span className="text-xs text-gray-400">📷 instagram.com</span>
                <span className="text-[10px] text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">Voir →</span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://instagram.com/elegance_cafe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
            📱 Suivez-nous sur Instagram
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="text-[10px] text-gray-500">⭐ Partagez votre expérience avec #EleganceCafe</p>
        </div>
      </div>

      {/* Galerie 360 */}
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
      </div>

      {/* Footer */}
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
          <div className={`pt-6 border-t w-full text-[10px] uppercase tracking-wider ${darkMode ? 'border-[#1A1A1A] text-gray-600' : 'border-[#D4C9BF] text-gray-500'}`}>
            &copy; {new Date().getFullYear()} L'Élégance Artisan Café. Menu digital.
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div className={`relative max-w-md w-full rounded-2xl overflow-hidden ${cardBgClass} border shadow-2xl`} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedItem(null)} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition">✕</button>
            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-64 object-cover" />
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className={`text-xl font-semibold ${textClass}`}>{selectedItem.name}</h3>
                <div className="flex gap-1">
                  {selectedItem.badges?.includes('Signature') && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      <span className="badge-3d-star inline-flex"><Icon3D type="star" size={14} /></span> Signature
                    </span>
                  )}
                  {selectedItem.badges?.includes('Nouveau') && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      <span className="badge-3d-new inline-flex"><Icon3D type="new" size={14} /></span> Nouveau
                    </span>
                  )}
                  {selectedItem.badges?.includes('Végétarien') && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                      <span className="badge-3d-vege inline-flex"><Icon3D type="vege" size={14} /></span> Végétarien
                    </span>
                  )}
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedItem.desc}</p>
              <div className="pt-2 flex justify-between items-center border-t border-[#2A2A2A] mt-2">
                <span className="text-2xl font-bold text-orange-400">{selectedItem.price}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}