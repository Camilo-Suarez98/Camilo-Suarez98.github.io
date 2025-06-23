export const checkPageIsSelected = (theme, pathname) => {
  if (
    pathname === "/" && theme === "dark" ||
    pathname === "/portfolio" && theme === "dark" ||
    pathname === "/contact" && theme === "dark"
  ) {
    return "#c8c8c8";
  } else if (
    pathname === "/" ||
    pathname === "/portfolio" ||
    pathname === "/contact"
  ) {
    return "#fff";
  } else {
    return "";
  }
};