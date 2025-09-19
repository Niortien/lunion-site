"use client";
import React, { useEffect, useState } from "react";
export const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Empêche le SSR de casser le rendu
  return <>{children}</>;
};