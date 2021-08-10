
export default interface NewsItem {
  source: {
    id: null,
    name: string,
  }
  author: string | null,
  title: string,
  description: string,
  url: string,
  urlToImage: string | null,
  publishedAt: string,
  content: string,
}