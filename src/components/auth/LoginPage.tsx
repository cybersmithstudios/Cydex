import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "./AuthLayout";

const LoginPage = () => {
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
            className="text-sm text-[#AFFF64] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button className="w-full h-12 bg-[#AFFF64] text-black hover:bg-[#9FEF54]">
          Sign in
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#AFFF64] hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
