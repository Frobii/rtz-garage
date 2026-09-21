import EmbedContent from "../../features/socials/EmbedContent";
import styles from "./Media.module.css";

//TODO: Populate media with content from database (see EmbedContent.jsx TODO)
function Media() {

  return (
    <>
      <h1 className={styles.mediaHeading}>Media</h1>
      <div className={styles.contentContainer}>
        <EmbedContent
          title="350Z Drift Build Series"
          link="https://www.youtube.com/playlist?list=PLD0V9AwG9RQ4VDnJjMH4-4fINzyi4kVdC"
          embed={<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=7NOXc_V6MNirYeDb&amp;list=PLD0V9AwG9RQ4VDnJjMH4-4fINzyi4kVdC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        />
        <EmbedContent
          title="E46 Track Build Series"
          link="https://www.youtube.com/playlist?list=PLD0V9AwG9RQ5iWE0yza8KDZAcNhTc23Yg"
          embed={<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=Q3vOb7bh76AxfM61&amp;list=PLD0V9AwG9RQ5iWE0yza8KDZAcNhTc23Yg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        />
        <EmbedContent
          title="Z20 Restoration Series"
          link="https://www.youtube.com/playlist?list=PLD0V9AwG9RQ6ee7yEDargH7wNTh3ivNJy"
          embed={<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=6IF4D36GiKKdfVZQ&amp;list=PLD0V9AwG9RQ6ee7yEDargH7wNTh3ivNJy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        />
        <EmbedContent
          title="WRX Restoration Series"
          link="https://www.youtube.com/playlist?list=PLD0V9AwG9RQ4j-6GiNzc4vuNv-awCaGoV"
          embed={<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=kTAGefpayB_yv8Ng&amp;list=PLD0V9AwG9RQ4j-6GiNzc4vuNv-awCaGoV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        />
      </div>
    </>
  );
}

export default Media;
