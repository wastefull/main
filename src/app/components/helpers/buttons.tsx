import { Link } from "react-router";

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
export function renderLink(
  href: string,
  tone: { color: string },
  link: string,
): import("react").ReactNode {
  return isExternal(href) ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: tone.color }}
    >
      {link}
    </a>
  ) : (
    <Link to={href} style={{ color: tone.color }}>
      {link}
    </Link>
  );
}
