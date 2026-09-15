import type { ArticleSection } from "@/lib/projects";
import styles from "./ArticleBody.module.css";

function renderSection(section: ArticleSection, i: number) {
  switch (section.type) {
    case "heading":
      return <h2 key={i} className={styles.heading}>{section.text}</h2>;
    case "paragraph":
      return <p key={i} className={styles.paragraph}>{section.text}</p>;
    case "list":
      return (
        <ul key={i} className={styles.list}>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className={styles.quote}>
          <p>&ldquo;{section.text}&rdquo;</p>
          {section.attribution && <cite>{section.attribution}</cite>}
        </blockquote>
      );
    case "image":
      return (
        <figure key={i} className={styles.figure}>
          <img src={section.src} alt={section.caption || ""} />
          {section.caption && <figcaption>{section.caption}</figcaption>}
        </figure>
      );
  }
}

export default function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return <div className={styles.body}>{sections.map(renderSection)}</div>;
}
