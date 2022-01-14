var value:string = "testing what we can do"
console.log(value)

var gigel = function(id:number, koko:string)
{
    console.log(id + koko)
}

var tititi = new Function("a", "b", "return a + b")
console.log(tititi)

// error raised automatic 
let kla = true
//kla = "stringa"

var honolulu = {
    FirstName: "hi",
    gigel: "asddsa",
    sayHi: () => 
    {
        return "hi"
    }
}

// interface for user
interface User
{
    name: string;
    age: number;
}

// user1 that uses User interface
const user1: User = 
{
    name: "avion",
    age: 120
}

//console.log(user1.naem1) warning for not existance of "naem1"

let pageName:string | number = 1
pageName = "1"


const doSOmething = (): void => 
{
    console.log("something is happening")
}

const usingNever = (): never =>
{
    console.log("autobuz");
    throw "never"
}

let pageNumber = "1" as string

// --- Dom ---

const someElement = document.querySelector(".testingId") as HTMLInputElement;

console.log("someElement", someElement.value)

interface UserInterface
{
    gigelDo():void
}

class TestingSolidity implements UserInterface
{
    
    private masini: number
    private name: string

    constructor()
    {

    }

    changeStff(): void
    {

    }

    gigelDo():void
    {

    }
}

class Admin extends TestingSolidity
{

}

// -- generoc --

const harapAlb = <T>(stuff: T) => 
{
    console.log(stuff)
}

const result = harapAlb<string>("avioncutmor")