import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "./AuthLayout";

const SignupPage = () => {
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

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" className="mt-1" />
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

        <Button className="w-full h-12 bg-[#AFFF64] text-black hover:bg-[#9FEF54]">
          Create account
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
