import type { Article } from "../types";

const NewsArticle = ({ article }: { article: Article }) => {
  return (
    <div key={article.title} className="bg-gray-50 w-11/12 mx-auto p-3 my-5">
      <h3 className="text-2xl">{article.title}</h3>
      <div className="my-3 text-gray-800 text-sm">
        Published at {new Date(article.publishedAt).toLocaleString()} <br />
        Authored by {article.author} <br />
      </div>
      <img
        className="my-3"
        src={article.urlToImage}
        alt={article.description}
      />
      <p>{article.description}</p>
      <a href={article.url}>Source - {article.source.name}</a>
    </div>
  );
};

export default NewsArticle;
