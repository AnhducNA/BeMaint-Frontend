import { AuthLayout } from "@/layouts/auth-layout";
import { Box } from "@mui/material";

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}
