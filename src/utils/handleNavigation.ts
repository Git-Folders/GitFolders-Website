export const handleNavigation = (url: string): void => {
  if (url.startsWith("https:")) {
    // External URL: open in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  } else if (url.startsWith("/")) {
    // Internal URL: open in the same tab
    window.location.href = url;
  } else {
    console.warn("Unhandled URL format:", url);
  }
};
