import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Form Side */}
      <div className="flex flex-col p-8 lg:p-12">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <Leaf className="h-8 w-8 text-[#AFFF64]" />
          <span className="text-2xl font-bold">Cydex</span>
        </Link>

        <div className="flex-1 flex flex-col justify-center max-w-[420px] mx-auto w-full">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground mb-8">{subtitle}</p>
          {children}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          © 2024 Cydex. All rights reserved.
        </p>
      </div>

      {/* Right: Image Side */}
      <div className="hidden lg:block relative bg-[#EFFFE0]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599939571322-792a326991f2')] bg-cover bg-center opacity-10" />
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg max-w-[600px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Join the Green Revolution
            </h2>
            <p className="text-muted-foreground">
              Be part of our mission to create a sustainable future through
              eco-friendly deliveries. Every package delivered with Cydex
              contributes to reducing carbon emissions and building a cleaner
              planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
