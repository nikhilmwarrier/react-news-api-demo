import type { Article } from "../types";

const NewsArticle = ({
  article,
  className,
  isHero,
}: {
  article: Article;
  className?: string;
  isHero?: boolean;
}) => {
  return (
    <div key={article.title} className={`${className ? className : ""} p-3`}>
      <a href={article.url}>
        <h3 className={isHero ? "text-5xl" : "text-2xl"}>{article.title}</h3>
      </a>
      <div className="my-3 text-gray-800 text-sm">
        Published at {new Date(article.publishedAt).toLocaleString()} <br />
        Authored by {article.author} <br />
      </div>
      <img
        className="my-3 mx-auto"
        src={article.urlToImage}
        alt={article.description}
      />
      <p>{article.description}</p>
      <a className="link" href={article.url}>
        Source - {article.source.name}
      </a>
    </div>
  );
};

export default NewsArticle;
