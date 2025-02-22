"use client";

import React from "react";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import GoogleSigninButton from "@/sections/auth/components/GoogleSigninButton";
import SigninWithPassword from "@/sections/auth/components/SigninWithPassword";

export function SignInView() {
  return (
    <Stack spacing={2}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div className="w-full xl:w-1/2">
          <div className="w-full p-4 sm:p-12.5 xl:p-15">
            <GoogleSigninButton text="Sign in" />

            <div className="my-6 flex items-center justify-center">
              <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
              <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
                Or sign in with email
              </div>
              <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
            </div>

            <div>
              <SigninWithPassword />
            </div>

            <div className="mt-6 text-center">
              <p>
                Don’t have any account?{" "}
                <Link href="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Box>
    </Stack>
  );
}
