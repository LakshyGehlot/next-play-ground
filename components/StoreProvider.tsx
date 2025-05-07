"use client";

import React from "react";
import { AppStore, createStore } from "@/lib/store/store";
import { useRef, useEffect } from "react";
import { Provider } from "react-redux";
import { toggleDarkMode } from "@/lib/store/slices/appSettings";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeref = useRef<AppStore>(null);

  if (!storeref.current) {
    storeref.current = createStore();
  }

  return <Provider store={storeref.current}>{children}</Provider>;
};

export default StoreProvider;
