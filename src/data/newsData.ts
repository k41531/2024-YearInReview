export interface Article {
  title: string;
  date: string;
  summary: string;
}

export interface Week {
  weekNumber: number;
  articles: Article[];
}

export interface MonthData {
  month: string;
  slug: string;
  summary: string;
  weeks: Week[];
}

import { parse } from 'jsonc-parser';
import rawNewsData from './newsData.jsonc?raw';

export const newsData: MonthData[] = parse(rawNewsData);
