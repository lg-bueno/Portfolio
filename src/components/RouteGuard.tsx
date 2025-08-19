"use client";

import { ReactNode } from "react";

interface RouteGuardProps {
	children: ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  return <>{children}</>;
};

export default RouteGuard;
