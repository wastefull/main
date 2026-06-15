import { renderLink } from "./buttons";

export function Item({
  n,
  title,
  body,
  link,
  href,
  tone,
}: {
  n: string;
  title: string;
  body: string;
  link: string;
  href: string;
  tone: { color: string };
}) {
  return (
    <article className="step-grid">
      <div className="step-number">{n}</div>
      <div>
        <h3 className="step-title">{title}</h3>
        <p className="step-body">{body}</p>
        {renderLink(href, tone, link)}
      </div>
    </article>
  );
}
