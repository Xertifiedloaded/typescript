// if i want to add something or create an object i need to create interface for it fot instance
interface someValue {
    name: string;
    id: number;
}
//  then
const someObj: someValue = {
    name: "olaitan",
    id: 1
}
console.table(someObj);

// --------------------------------------------------------------------------------------------------------------------
// Data Type Annotation
let awesomeName = 'Olaitan' //in javascript .js
let myNumber = 2 //in javascript
// since we are working with .ts we need to do it like this
// let variableName: variableType = ''
// this allows us to avoid some bugs and show method associated with the data type instead of shown all
// for instance we cant do  variableName = 2 it will show error because we have assign a string type to it
// i said oh this is going to be a number and dont apply any other type ,if i put any data type that is not a number show error
let variableName: string = 'Olaitan' //typescript .ts
let amount: number = 20500 //typescript .ts
amount = 1300 - 200
let isActive: boolean = true //typescript .ts
isActive = false //typescript .ts
isActive = 'false' // can not do it because the data type is boolean
console.log(amount && isActive);

// --------------------------------------------------------------------------------------------------------------------
// Union Type 
// This allows a variable to set more than one distinct type to the same variable
// for Instance
let tax: number | string | boolean | undefined = 200;
let anyAmount = tax - 30;
console.log(anyAmount);
// this will show the suggestion
let requestStatus: "completed" | "in-progress" | "pending" = "pending"

// --------------------------------------------------------------------------------------------------------------------
// type Any
let notSure: any = 4
notSure = 'not sure string'
notSure = false
// for instance
const books = ['1995', "Agony of an african child", "When lemon grows on orange tree"]
let foundBook: string | undefined
// use for loop
for (let book of books) {
    if (book === "1995") {
        foundBook = book
        foundBook = foundBook.toUpperCase
        foundBook.length
        break;
    }
}
// it definately add ? 
foundBook?.length;

// --------------------------------------------------------------------------------------------------------------------
// Arrays in Typescript
// arrays use []
let prices: number[] = [100, 200, 400] //number array, we cant push number type
// telling typescript that this array will only have array numbers 
let names: string[] = ["ola", "tayo", "azeemat"] //string array we cant push number
// telling typescript that this array will only have array string
let newName: (string | boolean | number)[] = ["ola", 2, true]  //instead of using type any we tell our arrays that it should select any

// --------------------------------------------------------------------------------------------------------------------
// Object fundamental in typescript
let car: { brand: string; year: number } = {
    brand: "toyota",
    year: "2023"
}

// array of object in Typescript
// --------------------------------------------------------------------------------------------------------------------
let students: { firstName: string; lastName: string; surName: string; age: number; address?: string }[] = [
    // use ? here because not all the object have address
    // ? is called optional
    {
        firstName: "olaitan",
        lastName: "olaitan",
        surName: "olaitan",
        age: 22,
        address: "funaab area agbede"
    },
    {
        firstName: "ibrahim",
        lastName: "abdul",
        surName: "adebesin",
        age: 22,
    },
    {
        firstName: "dada",
        lastName: "taslim",
        surName: "ayomide",
        age: 22,
        address: "funaab area agbede"
    },

]
console.table(students);

// --------------------------------------------------------------------------------------------------------------------
// Functions
function sayHi(name: string) {
    // the parameter set need to have type annotation 
    // so we can do it wit three options 
    // any
    // config
    // type -string,number etc eg name:string
    // eg 
    console.log(`my name is ${name.toUpperCase}`)
}
sayHi("olaitan")

// --------------------------------------------------------------------------------------------------------------------
// Functions Returns
function calculateDiscount(price: number): (number | string | boolean) {
    // function return is optional but it is good to set it after function name : (number | string | boolean)
    // to let us know oh inside our function i want to return any of the type 
    return price * 0.9
    // will only get the method that are associated to it
}
const finalPrice = calculateDiscount(200)

// --------------------------------------------------------------------------------------------------------------------
// Option Parameters
function calculatePrice(price: string, discount: number): (string | undefined | number) {
    return price - discount
}
let priceAfterDiscount = calculatePrice(500, 100)

// --------------------------------------------------------------------------------------------------------------------
// Rest Parameters
function sum(message: number, ...numbers: number[]): string {
    // technically are the numbers are going to be collected in an array
    // and return a string from this function
    const doubled = numbers.map((num) => num * 2)
    console.log(doubled);
    let total = numbers.reduce((previous, current) => {
        return previous + current
        // default value is 0
    }, 0)
    return `${message} ${total}`

}
let result = sum('the number is :', 1, 2, 3, 4, 5)

// --------------------------------------------------------------------------------------------------------------------
// Type Guard
function processInput(input: string | number) {
    if (typeof input === "number") {
        console.log(input);
    } else {
        console.log(input.toLowerCase());
    }
}
processInput('dhdhdhhdhdhdhhd')
processInput(10)
// --------------------------------------------------------------------------------------------------------------------
// Type Alias
type Credential = [
    {
        id: number;
        userName: string;
        password: string
    }
]
const users: Credential[] = [
    {
        userName: "olaitan",
        password: "dkddmkmkdmkemkm"
    },
    {
        userName: "olaitan",
        password: "dkddmkmkdmkemkm"
    },
    {
        userName: "olaitan",
        password: "dkddmkmkdmkemkm"
    },
    {
        userName: "olaitan",
        password: "dkddmkmkdmkemkm"
    },
]
console.table(users);
