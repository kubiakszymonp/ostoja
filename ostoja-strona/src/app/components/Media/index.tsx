export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Media.tsx
import React, { useState, useEffect, ReactNode } from "react";

interface MediaProps {
  lessThan?: Breakpoint;
  greaterThanOrEqual?: Breakpoint;
}

const getMediaQuery = ({
  lessThan,
  greaterThanOrEqual,
}: MediaProps): string => {
  let query = "";

  if (lessThan && breakpoints[lessThan]) {
    query += `(max-width: ${breakpoints[lessThan] - 1}px)`;
  }

  if (greaterThanOrEqual && breakpoints[greaterThanOrEqual]) {
    if (query) query += " and ";
    query += `(min-width: ${breakpoints[greaterThanOrEqual]}px)`;
  }

  return query;
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

const Media: React.FC<MediaProps & { children: React.ReactNode }> = ({
  lessThan,
  greaterThanOrEqual,
  children,
}) => {
  const query = getMediaQuery({ lessThan, greaterThanOrEqual });
  const matches = useMediaQuery(query);

  return matches ? <>{children}</> : null;
};

export default Media;
