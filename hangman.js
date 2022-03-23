let guesses = 10
let words = ['gil', 'omer', 'yoav']
let result = []
let found_letters = 0

let word = words[Math.floor(Math.random()*words.length)];

console.log("You have " + guesses + " guesses")
num_of_astrisks = word.length
for (let i=0; i<num_of_astrisks; i++)
    result[i] = "*"
console.log("The Word is: " + result)

while (guesses > 0){
    const input = prompt("What is your guess");
    found = false
    for (let i =0; i< word.length; i++){
        if (word[i] == input){
            result[i] = input
            found_letters ++
            found = true
        }

    }
    if (found == false){
        guesses = guesses - 1;
    }
    if (found_letters == word.length){
        console.log("You won!")
        break
    }

    console.log("The Word is: " + result)
    console.log("You have " + guesses + " guesses")

}