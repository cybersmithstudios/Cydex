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
import { Alert, AlertDescription } from "@/components/ui/alert";
import AuthLayout from "./AuthLayout";
import { useState } from "react";
import { signUp } from "@/lib/auth";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"customer" | "rider" | "vendor">("customer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      setError("Please accept the terms and conditions");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const { error: signUpError } = await signUp(
        email,
        password,
        firstName,
        lastName,
        role,
      );

      if (signUpError) throw signUpError;

      setSuccess(true);
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="Follow the instructions sent to your email to complete your registration"
      >
        <div className="space-y-4">
          <Alert>
            <AlertDescription>
              We've sent a confirmation email to {email}. Please check your
              inbox and click the verification link to complete your
              registration.
            </AlertDescription>
          </Alert>
          <p className="text-sm text-muted-foreground text-center">
            Already verified?{" "}
            <Link to="/login" className="text-[#AFFF64] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join our eco-friendly delivery platform"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-4 grid-cols-2">
          <Input
            type="text"
            placeholder="First name"
            className="h-12"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Last name"
            className="h-12"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email address"
            className="h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Create password (min. 6 characters)"
            className="h-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <div className="space-y-2">
          <Select
            value={role}
            onValueChange={(value: any) => setRole(value)}
            defaultValue="customer"
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select your role (e.g., Customer)" />
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
          <Checkbox
            id="terms"
            className="mt-1"
            checked={termsAccepted}
            onCheckedChange={(checked: boolean) => setTermsAccepted(checked)}
          />
          <label
            htmlFor="terms"
            className="text-sm text-muted-foreground leading-relaxed"
          >
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="text-[#AFFF64] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-[#AFFF64] hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#AFFF64] text-black hover:bg-[#9FEF54]"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create account"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-[#AFFF64] hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
