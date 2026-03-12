"use client";
import { track } from "@vercel/analytics";

interface Props {
  href: string;
  eventName: string;
  eventProps?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function TrackedLink({ href, eventName, eventProps, className, children, target, rel }: Props) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => track(eventName, eventProps)}
    >
      {children}
    </a>
  );
}
