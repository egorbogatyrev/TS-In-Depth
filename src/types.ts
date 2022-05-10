import { createCustomer } from "./functions";
import { Author, Book, Person } from "./interfaces";

// type Book = {
//     id: number
//     title: string
//     author: string
//     available: boolean
//     category: Category
// };

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType = typeof createCustomer;

type fn = (p1: string, p2: number, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

// Task 07.05
type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type fn1 = (p1: string) => symbol;

type P4 = Param1<fn1>;