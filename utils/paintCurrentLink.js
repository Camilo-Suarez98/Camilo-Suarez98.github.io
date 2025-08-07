export const checkPageIsSelected = (theme, pathname) => {
  if (
    pathname === "/" && theme === "dark" ||
    pathname === "/portfolio" && theme === "dark" ||
    pathname === "/contact" && theme === "dark"
  ) {
    return "#0d4ba8";
  } else if (
    pathname === "/" && theme === "light" ||
    pathname === "/portfolio" && theme === "light" ||
    pathname === "/contact" && theme === "light"
  ) {
    return "#fff";
  } else {
    return "";
  }
};