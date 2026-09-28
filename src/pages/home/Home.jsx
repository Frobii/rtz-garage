import ProductList from "../../features/product/ProductList";
import { useContent } from "../../features/socials/ContentContext";
import EmbedContent from "../../features/socials/EmbedContent";
import styles from "./Home.module.css";

function Home() {
  const { content, loading, error } = useContent();

  const featured = content?.find(item => item.featured);

  return (
    <>
      <h1>Home</h1>
      <div className={styles.latestProducts}>
        <h2>Latest Products</h2>
        <div className={styles.scrollContainer} >
          <ProductList category={"all"} horizontal={true} sort={"newest"}/>
        </div>
      </div>
      <div className={styles.featuredMedia}>
        <h2>Featured Media</h2>
        {loading && <div>Loading media...</div>}
        {error && <div>Error loading media: {error}</div>}
        {featured && (
          <EmbedContent
            title={featured.title}
            link={featured.link}
            source={(featured.iframeSource)}
          />
        )}
      </div>
    </>
  );
}

export default Home;
