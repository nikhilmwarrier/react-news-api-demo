import type { Article } from "../types";

const NewsImageCard = ({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) => {
  return (
    <a href={article.url}>
      <div key={article.title} className={`${className ? className : ""} p-6 h-full bg-white hover:bg-gray-200`}>
        <img
          className="my-3 mx-auto"
          src={article.urlToImage}
          alt={article.description}
        />
        <h3 className="text-2xl">{article.title}</h3>
      </div>
    </a>
  );
};

export default NewsImageCard;
