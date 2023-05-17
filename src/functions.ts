//function greet(name:string){
//    console.log('Hello '+ name.toUpperCase())
//}

//greet("Angelica");

//function getNumber():number {
//    return Math.floor(Math.random() * 100);
//}

//console.log(getNumber());

function printPosition(position: {lat: number, long: number}):void{
    console.log('latitud y longitud are'+ ' LAT: '+ position.lat +
    ' LONG: '+ position.long);
}

printPosition({lat: 33, long: 46});