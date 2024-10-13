import { Dispatch, useEffect, useState } from "react";
import type { Article, NewsCategory, TopHeadlines } from "../types";
import NewsArticle from "./NewsArticle";
import LatestHeadlines from "./LatestHeadlines";
import NewsImageCard from "./NewsImageCard";
import CategorySelector from "./CategorySelector";

const NewsItems = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<NewsCategory>("general");

  useEffect(() => {
    setLoading(true);
    const getHeadlines = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=23&category=${category}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_NEWSAPI_KEY,
          },
        }
      );
      const data = (await response.json()) as TopHeadlines;
      console.log(data.articles);

      /* Only show articles that are not [Removed] */
      const filteredArticles = data.articles.filter(
        article => article.title !== "[Removed]"
      );

      /* Look for the first article with an image and set it as the hero */
      let heroArticleIndex = filteredArticles.findIndex(
        article => article.urlToImage
      );
      let heroArticle = filteredArticles[heroArticleIndex];
      filteredArticles.splice(heroArticleIndex, 1);

      // The bottom grid looks ugly if the number of articles is NOT a multiple of `bottomGridSize`.
      const bottomGridSize = 4;

      // Because of this, we remove excess elements
      // Magic number: 8 = 1 (Hero) + 2 (Sub) + 5 (latestHeadlines)
      const excess = (filteredArticles.length - 8) % bottomGridSize;
      filteredArticles.splice(filteredArticles.length - 1 - excess, excess);

      setArticles([heroArticle, ...filteredArticles]);
      setLoading(false);
    };

    getHeadlines();
  }, [category]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <CategorySelector category={category} setCategory={setCategory} />

      {loading ? (
        <h3 className="font-6xl text-center">Loading...</h3>
      ) : (
        <>
          <div className="grid lg:grid-cols-5 pb-6 gap-6 mb-12 border-b-2 border-gray-200">
            <NewsArticle
              isHero
              article={articles[0]}
              className="h-full lg:col-span-3"
            />
            <LatestHeadlines
              articles={articles.slice(3, 8)}
              className="lg:col-span-2 ml-0"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-3 mb-6">
            <NewsArticle article={articles[1]} />
            <NewsArticle article={articles[2]} />
          </div>
          <div
            className="grid md:grid-cols-4 bg-gray-300"
            style={{ gap: "1px" }}
          >
            {articles.slice(9).map(article => (
              <NewsImageCard article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsItems;
