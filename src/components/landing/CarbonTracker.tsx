import React from 'react';
import { Card } from "@/components/ui/card";
import { Leaf, Bike, TreePine } from "lucide-react";

const CarbonTracker = () => {
  return (
    <section className="py-20 bg-[#F7F9F7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Environmental Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track our contribution to a greener planet through sustainable deliveries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#AFFF64]/20 p-4 rounded-full mb-4">
                <Bike className="w-8 h-8 text-[#AFFF64]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15,000+</h3>
              <p className="text-gray-600">Eco-Friendly Deliveries</p>
            </div>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#AFFF64]/20 p-4 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-[#AFFF64]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2.5 tons</h3>
              <p className="text-gray-600">CO2 Emissions Saved</p>
            </div>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#AFFF64]/20 p-4 rounded-full mb-4">
                <TreePine className="w-8 h-8 text-[#AFFF64]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Trees Equivalent Saved</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CarbonTracker;