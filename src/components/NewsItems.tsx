import { useEffect, useState } from "react";
import type { Article, TopHeadlines } from "../types";
import NewsArticle from "./NewsArticle";

const NewsItems = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHeadlines = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us",
        {
          headers: {
            Authorization: import.meta.env.VITE_NEWSAPI_KEY,
          },
        }
      );
      const data = (await response.json()) as TopHeadlines;
      console.log(data.articles);
      setArticles(data.articles);
      setLoading(false);
    };

    getHeadlines();
  }, []);

  return (
    <>
      <section className="w-11/12 mx-auto">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          /* Only show articles that are not [Removed] */
          articles.filter(article => article.title !== '[Removed]').map(article => <NewsArticle article={article} />)
        )}
      </section>
    </>
  );
};

export default NewsItems;
