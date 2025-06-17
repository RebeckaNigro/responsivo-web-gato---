
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Rocket, Target, Users, TrendingUp, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ChallengesSection from '@/components/ChallengesSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ChallengesSection />
      <SuccessStoriesSection />
      <ProjectGallery />
      <ContactSection />
    </div>
  );
};

export default Index;
