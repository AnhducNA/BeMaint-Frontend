// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

// ----------------------------------------------------------------------

export const paths = {
  // Auth

  auth: {
    jwt: {
      signIn: `${ROOTS.AUTH}/signin`,
      signUp: `${ROOTS.AUTH}/signup`,
      forgotPassword: `${ROOTS.AUTH}/forgot-password`,
      resetPassword: `${ROOTS.AUTH}/reset-password`,
      verify: `${ROOTS.AUTH}/verify`,
    },
  },
};
