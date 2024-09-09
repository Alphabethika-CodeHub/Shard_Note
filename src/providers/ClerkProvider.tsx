import React, { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const ClerkLayoutProvider = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClerkLayoutProvider;
