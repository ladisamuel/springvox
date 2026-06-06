import React from 'react'

export default function SectionDivider({ flip = false }) {
  return (
    <div className={`relative h-24 w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
          fill="url(#divider-gradient)"
          opacity="0.1"
        />
        <path
          d="M0 70C360 20 720 90 1080 40C1260 15 1350 60 1440 30V100H0V70Z"
          fill="url(#divider-gradient-2)"
          opacity="0.05"
        />
        <defs>
          <linearGradient id="divider-gradient" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#0299b1" />
            <stop offset="0.5" stopColor="#01424c" />
            <stop offset="1" stopColor="#0299b1" />
          </linearGradient>
          <linearGradient id="divider-gradient-2" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#01424c" />
            <stop offset="1" stopColor="#0299b1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
