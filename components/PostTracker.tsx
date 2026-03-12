"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

export function PostTracker({ slug, title }: { slug: string; title: string }) {
  useEffect(() => {
    track("post_read", { slug, title });
  }, [slug, title]);
  return null;
}
