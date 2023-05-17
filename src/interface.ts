interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id:number) => void
}

const book: Book={
    id: 1,
    title: 'Ready Player One',
    author:'Ernest Cline'
};

const books: Book[]=[];

function getBook(): Book {
    return{id: 1, title: 'Ready Player One', author:'Ernets Cline'};
}

const myBook = getBook();

function createBook(book: Book):Book {
    return book;
}

const newBook: Book ={
    id: 2,
    title: 'Donde esta Alaska',
    author:'John Green',
    coAuthor: 'Snow'
}

createBook(newBook);