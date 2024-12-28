export interface ArticleLink {
  title: string;
  url: string;
}

export interface Article {
  title: string;
  date: string;
  summary: string;
  links?: ArticleLink[];
}

export interface Week {
  weekNumber: number;
  articles: Article[];
}

export function organizeWeeklyPreviews(weeks: Week[]) {
  return weeks.map(week => ({
    weekNumber: week.weekNumber,
    headlines: week.articles.map(article => ({
      title: article.title,
      date: article.date
    }))
  }));
}