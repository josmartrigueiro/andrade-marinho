"use client";

import { useEffect, useState } from "react";

export function useImagePreload(imageUrls: string[]) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsLoaded(true);
      return;
    }

    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    const checkAllLoaded = () => {
      loaded++;
      setLoadedCount(loaded);
      if (loaded === imageUrls.length && !cancelled) {
        setIsLoaded(true);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      images.push(img);

      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;
      img.src = url;
    });

    return () => {
      cancelled = true;

      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return {
    isLoaded,
    loadedCount,
    totalCount: imageUrls.length,
    progress:
      imageUrls.length > 0 ? (loadedCount / imageUrls.length) * 100 : 100,
  };
}
