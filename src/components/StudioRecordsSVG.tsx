"use client";

import React from 'react';

export default function StudioRecordsSVG() {
  return (
    <div className="relative">
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Placeholder SVG content - replace with actual yakircoheninsidestudiorecords.svg */}
        <rect width="400" height="300" fill="#f8fafc" />
        <circle
          cx="200"
          cy="150"
          r="50"
          fill="#1a1a1a"
          className="microphone animate-pulse-subtle"
        />
        <path
          d="M180 120 L220 120 L220 180 L180 180 Z"
          fill="#f8fafc"
          className="microphone animate-pulse-subtle"
        />
        <text x="200" y="250" textAnchor="middle" fill="#1a1a1a" fontSize="16">
          Inside Studio Records
        </text>
      </svg>
      <style jsx>{`
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
}