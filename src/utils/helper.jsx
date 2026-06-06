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



  export const OurFeatures = [
    { title: "Enterprise-Grade Security", description: "SOC 2 compliant infrastructure with end-to-end encryption, zero-trust architecture, and continuous monitoring.", icon: "shield" },
    { title: "Scalable Architecture", description: "Cloud-native solutions designed to scale from startups to enterprises with millions of users.", icon: "layers" },
    { title: "Innovative Technologies", description: "Leveraging the latest in AI, blockchain, edge computing, and quantum-ready architectures.", icon: "cpu" },
    { title: "Experienced Team", description: "100+ senior engineers, architects, and designers with decades of combined industry expertise.", icon: "users" },
    { title: "Reliable Support", description: "24/7 dedicated support with 99.9% uptime SLA and guaranteed response times.", icon: "headphones" },
    { title: "Modern UI/UX Standards", description: "Pixel-perfect interfaces designed for accessibility, performance, and exceptional user experiences.", icon: "palette" },
    { title: "Fast Deployment", description: "Agile methodology with continuous delivery, getting your products to market 40% faster.", icon: "zap" },
    { title: "Cost-Effective Solutions", description: "Optimized resource utilization and efficient processes delivering maximum ROI.", icon: "dollar" },
  ];
  