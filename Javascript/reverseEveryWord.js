function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    return reversedWords.join(" ");
}
let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log("Reversed sentence:", reversedSentence);
