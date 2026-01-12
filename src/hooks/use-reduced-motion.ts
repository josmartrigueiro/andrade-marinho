"use client";

import { useEffect, useState } from "react";

/**
 * Hook para detectar preferência de movimento reduzido do usuário
 *
 * Monitora a media query `prefers-reduced-motion` e retorna true
 * quando o usuário solicita animações reduzidas (configuração de acessibilidade).
 *
 * Útil para:
 * - Respeitar preferências de acessibilidade
 * - Reduzir motion sickness em usuários sensíveis
 * - Melhorar performance em dispositivos mais fracos
 *
 * @returns boolean indicando se reduced motion está ativo
 *
 * @example
 * ```tsx
 * function AnimatedComponent() {
 *   const prefersReducedMotion = useReducedMotion();
 *
 *   return (
 *     <motion.div
 *       animate={{
 *         scale: prefersReducedMotion ? 1 : [1, 1.2, 1],
 *       }}
 *       transition={{
 *         duration: prefersReducedMotion ? 0 : 0.5,
 *       }}
 *     >
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Verifica se matchMedia está disponível (SSR safety)
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Define o estado inicial
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler para mudanças
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Adiciona listener (compatível com Safari antigo)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Fallback para Safari < 14
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        // Fallback para Safari < 14
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}
