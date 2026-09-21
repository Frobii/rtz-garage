import styles from "./EmbedContent.module.css";

//TODO: The data here should be sourced from a DB, uploaded from an admin panel
export default function EmbedContent({ embed, title, link }) {
  return (
    <div className={styles.embedContainer}>
      <h2>
        <a className={styles.embedTitle} href={link}>{title}</a>
      </h2>
      {embed}
    </div>
  );
}
