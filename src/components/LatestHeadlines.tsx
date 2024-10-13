import { Article } from "../types";

const LatestHeadlines = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="w-full m-auto p-3 border-solid border-2 border-gray-500">
      <h2 className="text-3xl mb-3">Latest headlines</h2>
      <ul role="list">
        {articles.map(article => (
          <li className="text-xl my-3 list-inside">
            <a className="link">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestHeadlines;
