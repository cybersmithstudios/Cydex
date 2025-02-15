import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bike, Leaf, Users } from "lucide-react";
import LandingHeader from "./LandingHeader";
import CarbonTracker from "./CarbonTracker";
import { StorePreview } from "./StorePreview";
import Testimonial from "./Testimonial";

const teamMembers = [
  {
    name: "Sarah Green",
    role: "CEO & Founder",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Mike Rivers",
    role: "Head of Operations",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
  },
  {
    name: "Lisa Chen",
    role: "Sustainability Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
  },
];

const faqs = [
  {
    question: "How does Cydex ensure eco-friendly deliveries?",
    answer:
      "We exclusively use bicycles, walkers, and electric vehicles for all our deliveries, minimizing carbon emissions.",
  },
  {
    question: "What is the bottle recycling program?",
    answer:
      "For every 10 plastic bottles recycled, you earn rewards like free deliveries or product discounts.",
  },
  {
    question: "How can I track my environmental impact?",
    answer:
      "Our platform provides real-time tracking of CO2 emissions saved through your eco-friendly deliveries.",
  },
  {
    question: "Are your packaging materials sustainable?",
    answer:
      "Yes, we use 100% biodegradable and recycled packaging materials for all deliveries.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <LandingHeader />
      {/* Hero Section */}
      <section 
        className="relative min-h-[75vh] md:min-h-[90vh] flex items-end bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/heroimage.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
        
        <div className="container mx-auto px-4 py-16 text-left relative z-10 mb-12">
          <div className="max-w-2xl">
            <h1 className="font-clash text-[32px] leading-[40px] md:text-[48px] md:leading-[64px] lg:text-[48px] lg:leading-[64px] font-semibold mb-6 animate-fadeIn text-white">
              Delivering a{" "}
              <span className="text-[#AFFF64] drop-shadow-lg">
                Greener Planet
              </span>
              , Every Order Counts
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-white mb-8 animate-fadeIn drop-shadow-lg">
              Join us in revolutionizing delivery services with our eco-friendly fleet
              of bicycles and electric vehicles. Every delivery brings us closer to a
              sustainable future.
            </p>
            <Button
              className="bg-[#AFFF64] text-black hover:bg-[#9FEF54] rounded-[0] text-lg px-8 py-6 transition-all duration-300 animate-fadeIn shadow-lg hover:shadow-xl">
              Place Your Eco-Friendly Delivery
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Cydex: Delivering a Greener Future
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Bike className="w-12 h-12 text-[#AFFF64] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Fleet</h3>
              <p>
                Our delivery network consists of bicycles and electric vehicles,
                minimizing environmental impact.
              </p>
            </Card>
            <Card className="p-6">
              <Leaf className="w-12 h-12 text-[#AFFF64] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Carbon Tracking</h3>
              <p>
                Monitor your carbon savings with every delivery and contribute
                to a sustainable future.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="w-12 h-12 text-[#AFFF64] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p>
                Join a growing community committed to reducing urban carbon
                emissions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Carbon Tracker Section */}
      <CarbonTracker />

      {/* Store Preview Section */}
      <StorePreview />

      {/* Team Section */}
      <section className="py-20 bg-[#EFFFE0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              The passionate individuals behind our mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq) => (
              <Card key={faq.question} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Email: hello@cydex.com</p>
              <p>Phone: +234-806-773-0770</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-[#AFFF64]">
                  Twitter
                </a>
                <a href="#" className="block hover:text-[#AFFF64]">
                  LinkedIn
                </a>
                <a href="#" className="block hover:text-[#AFFF64]">
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-[#AFFF64]">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-[#AFFF64]">
                  Terms of Service
                </a>
              </div>
            </div>
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo-i.png" alt="Cydex Logo" className="h-8" />
              </Link>
              <p className="text-gray-400">
                Delivering a sustainable future, one package at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
