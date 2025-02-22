import { SignInView } from "@/sections/auth/sign-in-view";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Login" };

const SignIn: React.FC = () => {
  return <SignInView />;
};

export default SignIn;
