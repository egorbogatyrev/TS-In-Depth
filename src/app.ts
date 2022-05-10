import { RefBook, ReferenceItem, Shelf, UL } from "./classes";
import { Library } from './classes';
import Encyclopedia from "./classes/encyclopedia";
import { Library as L } from './classes/library';
import { UniversityLibrarian } from "./classes/university-librarian";
import { Category } from "./enum";
import { setDefaultConfig, purge, getObjectProperty, getAllBooks, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults, bookTitleTransform, printRefBook } from "./functions";
import { Book, Librarian, TOptions, Magazine, Logger } from "./interfaces";
import { BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType } from "./types";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01, 02.02
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// caclTotalPages();

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${name}-${id}`;
// idGenerator = createCustomerID;

// Task 03.02
// createCustomer('Boris');
// createCustomer('Anna', 25);
// createCustomer('Helen', 30, 'Minsk');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));
// const myBooks: string[] = checkoutBooks('Ann', ...[1, 2, 4]);
// console.log(myBooks);
// console.log(getAllBooks());

// Task 03.03.
/* eslint-disable no-redeclare */

// Task 03.04
// bookTitleTransform('Anna');
// bookTitleTransform(10);

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamage: (reason: string) => console.log(`Damaged: ${reason}`)
//     // year: 2015,
//     // copies: 3
// };
// printBook(myBook);
// myBook.markDamage('missing back cover');

// Task 04.02
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoiriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 3
// };
// const favoiriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer(custName: string, bookTitle: string) {
//         console.log(custName);
//         console.log(bookTitle);
//     }
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamage'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// Task 05.01 WILL
// NOT WORK CAUSE WE HAVE ABSTRATCT CLASS NOW.
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 05.03, 06.03
// const refBook = new Encyclopedia(1, 'Learn typescript', 2022, 3);
// const refBook = new RefBook(1, 'Learn typescript', 2022, 3);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// printRefBook(favoriteLibrarian);

// Task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn Typescript');

// Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     name: 'Anna',
//     title: 'Unknown'
// };
// let o: TOptions = { speed: null };
// o = setDefaultConfig(o);
// console.log(o);

// Task 06.05
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             console.log(reader);
//         })
//         .catch(err => console.log(err));
// }
// if (flag) {
//     const module = await import('./classes');
//     const reader = new module.Reader();
//     console.log(reader);
// }

// Task 06.06
// let lib1: Library = new L();
// let lib2: Library = {
//     id: 1,
//     name: 'Unknown',
//     address: 'Minsk'
// }

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// let result: Book[] | number[] = purge<Book>(inventory);
// console.log(result);
// result = purge<number>([1, 2, 3]);

// Task 07.02, 07.03
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// const result = getObjectProperty(getAllBooks()[0], 'author');
// console.log(result);

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     markDamage: null,
//     pages: 100,
//     title: 'Unknown'
// };
// const updatedBook: UpdatedBook = {
//     id: 1,
//     author: 'Boris'
// };

// const p: Parameters<СreateCustomerFunctionType> = ['Anna', 30];
// createCustomer(...p);

// Task 08.01
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.assistCustomer = null;
// UL.UniversityLibrarian['a'] = 1;
// UL.UniversityLibrarian.prototype['b'] = 1;

// Task 08.02
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Anna';
// obj['printLibrarian']();

// Tasl 08.03
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// const proto = Object.getPrototypeOf(obj);
// console.log(proto);
// proto.assistFaculty = null;
// proto.teachCommunity = null;
// obj.teachCommunity = null;
// obj.assistFaculty = null;

// Task 08.04
// const enc = new RefBook(1, 'Learn Typescript', 2022, 3);
// enc.printItem();

// Task 08.05
// const obj = new UL.UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('Boris', 'Learn Typescript');
// console.log(obj);

// Task 08.06
// const obj = new UL.UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('Boris', 'Learn Typescript');
// console.log(obj);

// Task 08.07
// const enc = new RefBook(1, 'Learn Typescript', 2022, 3);
// enc.copies = 10;

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.Javascript)
//     .then(titles => {
//         console.log(titles);
//         // async operation.
//         return Promise.resolve(titles.length);
//     })
//     .then(len => console.log(len))
//     .catch(console.log);
// getBooksByCategoryPromise(Category.Software)
//     .then(console.log)
//     .catch(console.log);
// console.log('End');

// function getBooksByCategoryByPromise(Javascript: Category) {
//     throw new Error("Function not implemented.");
// }

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.Software)
//     .catch(console.log);
// console.log('End');