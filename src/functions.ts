import { RefBook } from "./classes";
import { Category } from "./enum";
import { Book, Callback, LibMgrCallback, TOptions } from "./interfaces";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): readonly Book[] {
  const books = <const>[
    { id: 1, title: 'Refactoring Javascript', author: 'Evan Burchard', available: true, category: Category.Javascript },
    { id: 2, title: 'Javascript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.Javascript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering Javascript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Javascript },
  ];
  return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
  console.log(books.length);
  const title = books.find(({ available }) => available)?.title;
  console.log(title);
}

export function getBookTitlesByCategory(category: Category = Category.Javascript) {
  const books = getAllBooks();
  let booksTitles: Array<string>;
  booksTitles = books.filter(book => book.category === category).map(({ title }) => title);
  return booksTitles;
}

export function logBookTitles(books: string[]): void {
  books.forEach(book => console.log(book));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
  const books = getAllBooks();
  const { title, author } = books[index];
  return [title, author];
}

export function caclTotalPages() {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
  ];
  let count: bigint = BigInt(0);
  data.forEach(book => count += (BigInt(book.books) * BigInt(book.avgPagesPerBook)));
  return count;
}

export function createCustomerID(name: string, id: number): string {
  return `${name}-${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  if (age) {
    console.log(`Customer age: ${age}`);
  }
  if (city) {
    console.log(`Customer city: ${city}`);
  }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
  const books = getAllBooks();
  return books.find(book => book.id === +id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer name: ${customer}`);
  return bookIDs
    .map(id => getBookByID(id))
    .filter(book => book.available === true)
    .map(book => book.title);
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
  const value = book[prop];
  return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions): TOptions {
  options.duration ??= 100;
  options.speed ??= 60;
  return options;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
  const books = getAllBooks();
  if (args.length === 1) {
    const [arg] = args;
    if (typeof arg === 'string') {
      return books.filter(({ author }) => author === arg).map(({ title }) => title);
    } else if (typeof arg === 'boolean') {
      return books.filter(({ available }) => available === arg).map(({ title }) => title);
    }

  } else if (args.length === 2) {
    const [id_arg, available_arg] = args;
    if (typeof id_arg === 'number' && typeof available_arg === 'boolean') {
      return books.filter(({ id, available }) => id === id_arg && available === available_arg).map(({ title }) => title);
    }
  }
  return [];
}

export function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

export function assertRefBookInstance(condition: any): asserts condition {
  if (!condition) {
    throw new Error('It is not an instance of RefBook');
  }
}

export function bookTitleTransform(title: any): string | never {
  assertStringValue(title);
  return [...title].reverse().join('');
}

export function printRefBook(data: any): void {
  assertRefBookInstance(data instanceof RefBook);
}

export function purge<T>(inventory: T[]): T[] {
  return inventory.slice(2);
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(
  obj: TObject, prop: TKey
): TObject[TKey] | string {
  const value = obj[prop];
  return typeof value === 'function' ? value.name : value;
}

// export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
  setTimeout(() => {
    try {
      const titles = getBookTitlesByCategory(category);
      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error('No books found.');
      }
    } catch (err) {
      callback(err, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
  if (err) {
    console.log(err.message);
  } else {
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p = new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      const titles = getBookTitlesByCategory(category);
      if (titles.length > 0) {
        resolve(titles);
      } else {
        reject('No books found.')
      }
    }, 2000);
  });

  return p;
}

export async function logSearchResults(category: Category) {
  const result: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);

  console.log(result.length);
}