import styles from "./EmbedContent.module.css";

export default function EmbedContent({ source, title, link }) {
  return (
    <div className={styles.embedContainer}>
      <h2>
        <a className={styles.embedTitle} href={link}>{title}</a>
      </h2>
      <iframe
        style={{ width: "min(80vw, 560px)", aspectRatio: "16 / 9", height: "auto" }}
        src={source}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
