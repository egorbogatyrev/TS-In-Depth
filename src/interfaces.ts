import { Category } from "./enum";

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamage?: DamageLogger
  // markDamage?(reason: string): void
};

interface DamageLogger {
  (reason: string): void;
}

interface A {
  [prop: string]: string | number;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
  duration?: number;
  speed?: number;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

interface LibMgrCallback {
  (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
  (err: Error | null, data: T | null): void;
}

export { Book, Magazine, ShelfItem, DamageLogger as Logger, LibMgrCallback, Callback, Person, Author, Librarian, TOptions };