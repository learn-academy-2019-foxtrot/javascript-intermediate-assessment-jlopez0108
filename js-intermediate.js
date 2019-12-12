// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = () =>{
    let fibArray = [0, 1, 1]
    for (var i=2; i<9; i++) {
        let i1 = fibArray.length-1
        let i2 = fibArray.length-2
        let nextNum = fibArray[i1] +fibArray[i2]
        fibArray.push(nextNum)
    }
    return fibArray
}
console.log(getFib())

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (array) =>{
    return array.filter(value => {
    return typeof value === "number" && value%2 !==0
  })
}


console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek",
	}
}



// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

const newArray = (array) =>{
    return array
}

console.log(newArray(originalArray1.reverse()))
console.log(newArray(originalArray2.reverse()))


// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

letterCounter = (str) =>{
    return str.split("l").length
}

console.log(letterCounter(ourString))


// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetters = (string) =>{
    if(string.length % 2 === 0){
        return string.slice((string.length / 2) -1,(string.length /2) +1)
    }else {
        return string.charAt(Math.floor(string.length / 2))
    }
}

console.log(middleLetters(middleLetters1))
console.log(middleLetters(middleLetters2))


// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)


class Sphere{
    constructor(radius){
        this.radius = radius
    }
    sphereArea(){
        return parseFloat((4 * Math.PI * this.radius **2).toFixed(4))
    }
}
var cyl1 = new Sphere(5)
var cyl2 = new Sphere(7)
var cyl3 = new Sphere(2)

console.log(cyl1.sphereArea())
console.log(cyl2.sphereArea())
console.log(cyl3.sphereArea())


// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual"
  }
}



var  {doors, transmission} = myCar.specs
 

console.log(`${doors}, ${transmission}`)



// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []



const sum = (arr) =>{
    let array = arr.map((value, index) => value + index)
    return array
}

console.log(sum(numbersToAdd1))
console.log(sum(numbersToAdd2))
console.log(sum(numbersToAdd3))

