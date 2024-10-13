import { Article } from "../types";

const LatestHeadlines = ({ articles, className }: { articles: Article[], className?: string }) => {
  return (
    <div className={`${className ? className : ''} w-full my-auto p-3 pl-6 border-solid border-l-2  border-gray-200`}>
      <h2 className="text-3xl mb-3">Latest headlines</h2>
      <ul role="list">
        {articles.map(article => (
          <li className="text-xl my-3 list-inside">
            <a href={article.url} className="link">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestHeadlines;
