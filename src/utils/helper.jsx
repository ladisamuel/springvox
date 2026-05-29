import { useRef, lazy } from "react";
// import React, { useEffect, useRef, Suspense, lazy } from 'react'
 


export const company = {
  name: "SpringVox Solution Limited",
  tagline: "Building Intelligent Software Solutions for the Future",
  description:
    "A forward-thinking technology company specializing in software development, enterprise solutions, artificial intelligence, cybersecurity, communication systems, and digital transformation services.",
  mission:
    "To empower businesses with innovative, scalable, and secure technology solutions that drive digital transformation and sustainable growth.",
  vision:
    "To be a global leader in intelligent technology solutions, setting the standard for innovation, reliability, and enterprise excellence.",
  email: "contact@springvox.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94043",
  founded: "2020",
};




export const ThreeScene = lazy(() => import("../components/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className=" w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  ),
});
