export interface blogCard {
  title: string
  description: string
  date: string
  readTime: number
}

export interface blogPost {
  title: string,
  excerpt: string,
  content: string,
  date: string,
  readTime: 8,
  tags: string[],
  image: string,
}
