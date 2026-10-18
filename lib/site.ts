// Shared site identity — single source of truth for social/contact links.
export const instagram = {
  handle: "@siwan.mp4",
  url: "https://www.instagram.com/siwan.mp4",
};

export const socials = [
  { label: "instagram", url: instagram.url },
  { label: "x", url: "https://x.com/0xSiwan" },
  { label: "threads", url: "https://www.threads.com/@codingbarista" },
  { label: "linkedin", url: "https://www.linkedin.com/in/siwankim/" },
];

// Nav shows a trimmed set; the footer carries the full list.
export const navSocials = [
  { label: "instagram", url: instagram.url },
  { label: "x", url: "https://x.com/0xSiwan" },
  { label: "linkedin", url: "https://www.linkedin.com/in/siwankim/" },
];
