import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "./AuthLayout";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/lib/auth";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { user, error } = await signIn(email, password);
      if (error) throw error;
      if (user) {
        setUser(user);
        navigate("/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your account"
    >
      <form className="space-y-4">
        <div className="space-y-2">
          <Input type="email" placeholder="Email address" className="h-12" />
        </div>

        <div className="space-y-2">
          <Input type="password" placeholder="Password" className="h-12" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="text-sm text-[#59B800] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button className="w-full h-12 bg-[#AFFF64] text-black hover:bg-[#9FEF54]">
          Sign in
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#59B800] hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
