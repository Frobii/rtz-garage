import ProductList from "../../features/product/ProductList";
import { useContent } from "../../features/socials/ContentContext";
import EmbedContent from "../../features/socials/EmbedContent";
import styles from "./Home.module.css";
import HorizontalScroll from "../../components/ui/HorizontalScroll";

function Home() {
  const { content, loading, error } = useContent();

  return (
    <>
      <h1>Home</h1>
      <div className={styles.latestProducts}>
        <h2>Latest Products</h2>
        <ProductList category={"all"} horizontal={true} sort={"newest"}/>
      </div>
      <div className={styles.featuredMedia}>
        <h2>Featured Media</h2>
        {loading && <div>Loading media...</div>}
        {error && <div>Error loading media: {error}</div>}
        <HorizontalScroll>
          {content
            .filter((item) => item.featured)
            .map((item) => (
              <ul key={item.id ?? item.link}>
                <EmbedContent
                  title={item.title}
                  link={item.link}
                  source={item.iframeSource}
                />
              </ul>
            ))}
        </HorizontalScroll>
      </div>
    </>
  );
}

export default Home;
