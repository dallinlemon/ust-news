import NewsItem from "./NewsItem";

export default interface NewsList {
  status: string,
  totalResults: number,
  articles: NewsItem[],
}