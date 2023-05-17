/* Interfaces
interface Person{
    id: number;
    name: string;  
}

//interface Employee extends Person{
 //   dept: string;
//}

interface Costumer extends Person{
    country: string;
}

interface Animal {
    name: string;
    getCats: () => void;
    getDogs?: () => void;
}

class Zoo implements Animal{
    name ='Yue';
    getCats(): void {
        //
    };
}*/