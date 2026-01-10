"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });

  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);

  const DOT_SMOOTHNESS = 0.3;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, img, input, textarea, select",
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        // Clamp factor between 0 and 1 to prevent overshooting
        const clampedFactor = Math.max(0, Math.min(1, factor));
        return start + (end - start) * clampedFactor;
      };

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS,
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS,
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS,
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS,
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      requestAnimationFrame(animate);
    };

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none">
      <div className="fixed inset-0 z-50">
        <div
          className="absolute rounded-full border border-white/50"
          style={{
            width: isHovering ? "80px" : "72px",
            height: isHovering ? "80px" : "72px",
            transform: "translate(-50%, -50%)",
            left: `${renderPos.border.x}px`,
            top: `${renderPos.border.y}px`,
            transition: "width 0.3s, height 0.3s",
            backdropFilter: "blur(8px)",
          }}
        />
      </div>
      <div
        className="absolute rounded-full border border-white/90 z-99999"
        style={{
          width: "0.875rem",
          height: "0.875rem",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          backdropFilter: isHovering ? "blur(8px)" : "blur(0px)",
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.6)" : "white",
        }}
      />
    </div>
  );
}
