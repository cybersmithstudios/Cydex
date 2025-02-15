import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bike, Leaf, Users, MessageCircle } from "lucide-react";
import LandingHeader from "./LandingHeader";

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

const testimonials = [
  {
    text: "Cydex has revolutionized how we think about deliveries. It's fast, eco-friendly, and reliable!",
    author: "John D.",
    role: "Regular Customer",
  },
  {
    text: "As a business owner, partnering with Cydex has helped reduce our carbon footprint significantly.",
    author: "Maria S.",
    role: "Restaurant Owner",
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
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <LandingHeader />
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[#EFFFE0]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Delivering a Greener Planet, Every Order Counts
          </h1>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599939571322-792a326991f2')] bg-cover bg-center opacity-10" />
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our sustainable delivery revolution using bicycles and electric
            fleets to reduce carbon emissions while ensuring swift, reliable
            service.
          </p>
          <Button
            size="lg"
            className="bg-[#AFFF64] text-black hover:bg-[#9FEF54] rounded-[0]"
          >
            Place Your Eco-Friendly Delivery
          </Button>
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
      {/* Team Section */}
      <section className="py-20 bg-[#EFFFE0]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="p-6">
                <MessageCircle className="w-8 h-8 text-[#AFFF64] mb-4" />
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 bg-[#EFFFE0]">
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
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Email: hello@cydex.com</p>
              <p>Phone: (555) 123-4567</p>
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
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-8 w-8 text-[#AFFF64]" />
                <span className="text-2xl font-bold">Cydex</span>
              </div>
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
