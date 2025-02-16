import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bike, User, Store } from "lucide-react";
import AuthLayout from "./AuthLayout";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "@/lib/auth";
import { useAuth } from "@/contexts/AuthContext";

const SignupPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"customer" | "rider" | "vendor">("customer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { user, error } = await signUp(
        email,
        password,
        firstName,
        lastName,
        role,
      );
      if (error) throw error;
      if (user) {
        setUser(user);
        navigate("/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join our eco-friendly delivery platform"
    >
      <form className="space-y-4">
        <div className="grid gap-4 grid-cols-2">
          <Input type="text" placeholder="First name" className="h-12" />
          <Input type="text" placeholder="Last name" className="h-12" />
        </div>

        <div className="space-y-2">
          <Input type="email" placeholder="Email address" className="h-12" />
        </div>

        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Create password"
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Select>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Customer</span>
                </div>
              </SelectItem>
              <SelectItem value="rider" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Bike className="h-4 w-4" />
                  <span>Rider</span>
                </div>
              </SelectItem>
              <SelectItem value="vendor" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4" />
                  <span>Vendor</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" className="mt-1" />
          <label
            htmlFor="terms"
            className="text-sm text-muted-foreground leading-relaxed"
          >
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="text-[#59B800] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-[#59B800] hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button className="w-full h-12 bg-[#AFFF64] text-black hover:bg-[#9FEF54]">
          Create account
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-[#59B800] hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
