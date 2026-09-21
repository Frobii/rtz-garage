import { useContent } from "../../features/socials/ContentContext";
import EmbedContent from "../../features/socials/EmbedContent";
import styles from "./Media.module.css";

function Media() {
  const { content, loading, error } = useContent();

  if (loading) return <div className={styles.loading}>Loading media...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <>
      <h1 className={styles.mediaHeading}>Media</h1>
      <div className={styles.contentContainer}>
        {content.map((item, index) => (
          <EmbedContent
            key={index}
            title={item.title}
            link={item.link}
            source={(item.iframeSource)}
          />
        ))}
      </div>
    </>
  );
}

export default Media;
