"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Mic, Music, ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const JSON_URL = 'https://raw.githubusercontent.com/yakir-c/yakircohenprudoctions/main/search-index.json';
const WA_BASE = 'https://wa.me/972587555456?text=';
const POPULAR = ['שיר כניסה לחופה', 'תקליטן לחתונה', 'אולפן ירושלים', 'פלייבק', 'מחירון'];
const SITE_BASE = 'https://www.yakircohen.com';

interface SearchResult {
  title: string;
  url: string;
  category: string;
}

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [seasonalText, setSeasonalText] = useState('');
  const [availability, setAvailability] = useState({ online: true, text: 'פנוי עכשיו' });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Music note particles
  useEffect(() => {
    const particlesContainer = document.getElementById('noteParticles');
    if (!particlesContainer) return;

    for (let i = 0; i < 20; i++) {
      const note = document.createElement('div');
      note.className = 'note-particle';
      note.textContent = '♪';
      note.style.left = Math.random() * 100 + '%';
      note.style.animationDelay = Math.random() * 20 + 's';
      note.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(note);
    }
  }, []);

  // Seasonal content
  useEffect(() => {
    const seasonalMap = [
      { months: [11, 0, 1], text: 'חורף חם עם מוזיקה', url: '/winter-special' },
      { months: [2, 3, 4], text: 'אביב של שירים', url: '/spring-songs' },
      { months: [5, 6, 7], text: 'קיץ של חתונות', url: '/summer-weddings' },
      { months: [8, 9, 10], text: 'סתיו מוזיקלי', url: '/autumn-music' },
    ];

    const month = new Date().getMonth();
    const seasonal = seasonalMap.find(s => s.months.includes(month));
    if (seasonal) {
      setSeasonalText(`עכשיו פופולרי: <strong>${seasonal.text}</strong> – <a href="${SITE_BASE}${seasonal.url}" target="_top">בואו נדבר ←</a>`);
    }
  }, []);

  // Availability timer
  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      const hour = now.getHours();

      if (day === 6) { // Shabbat
        setAvailability({ online: false, text: 'שבת שלום' });
      } else if (hour >= 9 && hour < 18) {
        setAvailability({ online: true, text: 'פנוי עכשיו' });
      } else {
        setAvailability({ online: false, text: 'חזור מאוחר יותר' });
      }
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  // Load search index
  useEffect(() => {
    fetch(JSON_URL)
      .then(res => res.json())
      .then(data => {
        // Assuming data is array of SearchResult
        // In real, adapt
      })
      .catch(err => console.error('Failed to load search index', err));
  }, []);

  // Search function
  const runSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowDropdown(true);
      return;
    }

    // Mock search - in real, filter from loaded index
    const mockResults: SearchResult[] = [
      { title: 'הקלטת שירים', url: '/studio/recording-song-modiin', category: 'אולפן' },
      { title: 'DJ לחתונות', url: '/events/dj-events', category: 'אירועים' },
      { title: 'הפקת פודקאסט', url: '/podcast/podcast-production', category: 'פודקאסט' },
      { title: 'אטרקציות לאירועים', url: '/attractions', category: 'אירועים' },
      { title: 'קורס DJ', url: '/academy#dj-course', category: 'אקדמיה' },
    ];

    setSearchResults(mockResults.filter(r =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.category.toLowerCase().includes(query.toLowerCase())
    ));
    setShowDropdown(true);
  };

  // Voice search
  const startVoiceSearch = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    const recognition = new SR();
    recognition.lang = 'he-IL';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      runSearch(transcript);
    };
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node) &&
          !searchInputRef.current?.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      {/* Music note particles */}
      <div id="noteParticles" className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true"></div>

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">שגיאה 404</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            הקצב<br />
            <span className="text-red-600">השתנה</span>.
          </h1>

          {/* Seasonal strip */}
          {seasonalText && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div dangerouslySetInnerHTML={{ __html: seasonalText }} />
            </div>
          )}

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            הדף שחיפשת לא נמצא, אבל יש לנו הרבה מוזיקה טובה במקום. בואו נמצא משהו שיתאים לך.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Music size={20} />
            בואו נדבר על המוזיקה שלכם
          </Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            <strong>חפשו כאן:</strong> שירותים, מחירים, או כל דבר שקשור למוזיקה ואירועים.
          </p>

          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-lg bg-white">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  runSearch(e.target.value);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="מה אתם מחפשים?"
                className="flex-1 px-4 py-3 text-right focus:outline-none"
              />
              <button
                onClick={startVoiceSearch}
                className={`p-3 ${isListening ? 'text-red-600 animate-pulse' : 'text-gray-400 hover:text-red-600'}`}
              >
                <Mic size={20} />
              </button>
            </div>

            {/* Dropdown */}
            {showDropdown && (
              <div ref={dropdownRef} className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 max-h-96 overflow-y-auto">
                {!searchQuery.trim() ? (
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-3">חיפושים פופולריים:</div>
                    <div className="flex flex-wrap gap-2">
                      {POPULAR.map((term, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSearchQuery(term);
                            runSearch(term);
                          }}
                          className="px-3 py-1 bg-gray-100 hover:bg-red-100 text-gray-700 rounded-full text-sm"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    {searchResults.map((result, i) => (
                      <Link
                        key={i}
                        href={result.url}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{result.title}</div>
                          <div className="text-sm text-gray-500">{result.category}</div>
                        </div>
                        <ArrowLeft size={16} className="text-gray-400" />
                      </Link>
                    ))}
                    <div className="p-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 mb-2">לא מצאתם מה שחיפשתם?</p>
                      <a
                        href={`${WA_BASE}היי יקיר, חיפשתי ${encodeURIComponent(searchQuery)} ולא מצאתי באתר`}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700"
                      >
                        <ExternalLink size={16} />
                        שאלו את יקיר בוואטסאפ
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">מה אנחנו עושים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/studio" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <Music className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">הקלטות</h3>
                <p className="text-gray-600">שירים, פודקאסט, ברכות מקצועיות</p>
              </div>
            </Link>
            <Link href="/events" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <Music className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">אירועים</h3>
                <p className="text-gray-600">DJ, אטרקציות, הפקות מלאות</p>
              </div>
            </Link>
            <Link href="/academy" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <Music className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">לימודים</h3>
                <p className="text-gray-600">קורסי DJ, סאונד, הפקה</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion Zone */}
      <section className="py-16 px-6 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-wide mb-4">מתנה לדרך</div>
          <h2 className="text-3xl font-bold mb-6">
            ייעוץ מוזיקלי<br />
            <span className="text-yellow-300">במתנה</span>.
          </h2>
          <p className="text-lg mb-8 opacity-90">
            הגעת לכאן בטעות? הרווחת 15 דקות ייעוץ אישי עם יקיר - ללא עלות, ללא התחייבות.
          </p>
          <a
            href={`${WA_BASE}היי%20יקיר%2C%20הגעתי%20לעמוד%20404%20ואשמח%20לשיחת%20ייעוץ%20במתנה%20🎵`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            קבלו ייעוץ בוואטסאפ
          </a>
        </div>
      </section>

      <Footer />

      {/* Sticky WhatsApp */}
      <a
        href={`${WA_BASE}היי%20יקיר%2C%20הגעתי%20לעמוד%20404%20ואשמח%20לעזרה`}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener"
        aria-label="צור קשר בוואטסאפ"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </a>

      <style jsx>{`
        .note-particle {
          position: absolute;
          font-size: 1.2rem;
          color: rgba(227, 30, 36, 0.06);
          animation: noteFloat linear infinite;
        }
        @keyframes noteFloat {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}