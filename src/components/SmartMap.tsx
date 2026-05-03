"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Play } from 'lucide-react';

interface SmartMapProps {
  address: string;
  googleMapsUrl: string;
  thumbnailUrl?: string;
}

export default function SmartMap({ address, googleMapsUrl, thumbnailUrl }: SmartMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadMap = () => {
    setIsLoaded(true);
  };

  if (isLoaded || isInView) {
    return (
      <div ref={mapRef} className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`מפת מיקום - ${address}`}
        />
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={handleLoadMap}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleLoadMap()}
      aria-label={`טען מפה עבור ${address}`}
    >
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt={`תמונת מפה סטטית - ${address}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
          <MapPin size={48} className="text-zinc-500" />
        </div>
      )}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
          <Play size={32} className="text-zinc-700" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
        <p className="text-sm font-medium text-zinc-700">{address}</p>
        <p className="text-xs text-zinc-500 mt-1">לחץ לטעינת המפה המלאה</p>
      </div>
    </div>
  );
}