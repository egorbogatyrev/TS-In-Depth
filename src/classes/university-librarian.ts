import { format, logger, logMethod, logParameter, sealed, writable } from "../decorators";
import { Librarian } from "../interfaces";

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Librarian {
  @format() name: string;
  email: string;
  department: string;

  a: number = 1;

  // @logMethod
  assistCustomer(/* @logParameter */ custName: string, /* @logParameter */ bookTitle: string): void {
    console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
  };

  // @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  };

  // @writable(false)
  teachCommunity(): void {
    console.log('Teaching community');
  }
}

export { UniversityLibrarian };