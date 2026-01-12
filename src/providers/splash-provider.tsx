"use client";

import { AnimatePresence } from "motion/react";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  SplashScreen,
  type SplashScreenProps,
} from "@/components/splash-screen";

interface SplashContextValue {
  isVisible: boolean;
  showSplash: () => void;
  hideSplash: () => void;
}

const SplashContext = createContext<SplashContextValue | undefined>(undefined);

export interface SplashProviderProps {
  children: ReactNode;
  showOnMount?: boolean;
  preloadImages?: string[];
  splashProps?: Omit<SplashScreenProps, "onComplete" | "preloadImages">;
  onComplete?: () => void;
}

export function SplashProvider({
  children,
  showOnMount = true,
  preloadImages = [],
  splashProps,
  onComplete,
}: SplashProviderProps) {
  const [isVisible, setIsVisible] = useState(showOnMount);

  const showSplash = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideSplash = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleComplete = useCallback(() => {
    setIsVisible(false);
    onComplete?.();
  }, [onComplete]);

  return (
    <SplashContext.Provider value={{ isVisible, showSplash, hideSplash }}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <SplashScreen
            {...splashProps}
            preloadImages={preloadImages}
            onComplete={handleComplete}
          />
        )}
      </AnimatePresence>
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  const context = useContext(SplashContext);

  if (!context) {
    throw new Error("useSplash must be used within a SplashProvider");
  }

  return context;
}
