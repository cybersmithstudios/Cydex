import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Chioma Okonkwo",
    role: "Restaurant Owner, Ibadan",
    content: "Cydex has revolutionized my food delivery service. Their eco-friendly approach aligns perfectly with my sustainable business practices.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma"
  },
  {
    name: "Oluwaseun Adebayo",
    role: "Student, University of Ibadan",
    content: "As a student, I appreciate how Cydex makes campus deliveries efficient and environmentally conscious.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oluwaseun"
  },
  {
    name: "Ibrahim Musa",
    role: "Market Vendor, Ibadan",
    content: "My customers love that their products are delivered sustainably. Cydex has helped grow my business significantly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim"
  },
  {
    name: "Aisha Mohammed",
    role: "Online Store Owner, Port Harcourt",
    content: "The reliability and eco-friendly approach of Cydex has made them an invaluable partner for my e-commerce business.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha"
  },
  {
    name: "Chidi Okafor",
    role: "Bookstore Owner, UI Bookshop",
    content: "Cydex's commitment to sustainable delivery has helped reduce our carbon footprint while maintaining excellent service.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chidi"
  },
  {
    name: "Folake Adeleke",
    role: "Student, Poly Ibadan",
    content: "The convenience of Cydex's service has made campus life so much easier, and I love supporting an eco-friendly initiative.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Folake"
  },
  {
    name: "Babajide Ogunleye",
    role: "Café Owner, Ibadan",
    content: "Since partnering with Cydex, our delivery operations have become more efficient and environmentally responsible.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Babajide"
  },
  {
    name: "Ngozi Eze",
    role: "Fashion Designer, Ibadan",
    content: "My customers appreciate that their fashion items are delivered sustainably. It adds value to our brand.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ngozi"
  },
  {
    name: "Yusuf Garba",
    role: "Student, ISI",
    content: "Cydex makes it easy to receive packages on campus while supporting environmental sustainability.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf"
  },
  {
    name: "Blessing Obaseki",
    role: "Grocery Store Owner, University of Ibadan",
    content: "The reliability and eco-conscious approach of Cydex has significantly improved our delivery service.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing"
  },
  {
    name: "Taiwo Adeniyi",
    role: "Student, University of Ibadan",
    content: "As an environmental science student, I appreciate how Cydex combines convenience with sustainability.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taiwo"
  },
  {
    name: "Amina Bello",
    role: "Restaurant Owner, Ibadan",
    content: "Cydex's service has helped us expand our delivery radius while maintaining our commitment to sustainability.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina"
  },
  {
    name: "Emmanuel Obi",
    role: "Pharmacy Owner, Ibadan",
    content: "Our customers value the quick and eco-friendly delivery service that Cydex provides.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel"
  },
  {
    name: "Fatima Usman",
    role: "Student, LAUTECH",
    content: "Cydex makes campus deliveries efficient and environmentally friendly. It's the perfect solution for students.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima"
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  useEffect(() => {
    const slider = scrollContainerRef.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const onMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const onScroll = () => {
      if (!slider) return;
      const index = Math.round(slider.scrollLeft / slider.offsetWidth);
      setActiveIndex(index);
    };

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);
    slider.addEventListener('scroll', onScroll);
    slider.addEventListener('touchend', onScroll);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
      slider.removeEventListener('scroll', onScroll);
      slider.removeEventListener('touchend', onScroll);
    };
  }, []);

  const scrollTo = (index: number) => {
    const slider = scrollContainerRef.current;
    if (!slider) return;
    slider.scrollTo({
      left: index * slider.offsetWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600">
            Hear from our community about their experience with Cydex
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="flex-none w-full snap-center bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-600 italic">{testimonial.content}</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5"
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5"
            onClick={() => scrollTo(Math.min(testimonials.length - 1, activeIndex + 1))}
            disabled={activeIndex === testimonials.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-[#AFFF64] w-4' : 'bg-gray-300'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;