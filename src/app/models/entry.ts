import { Sense } from './sense';
import { Category } from './category';

export class Entry {
  id: string;
  headword: string;
  category: Category;
  senses: Sense[];
  tags: string[];

  constructor(
    id: string,
    headword: string,
    category: Category,
    senses: Sense[]
  ) {
    this.id = id;
    this.headword = headword;
    this.category = category;
    this.senses = senses;
    this.tags = [];
  }
}
