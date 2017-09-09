function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

var upperCase = string.toUpperCase()
var lowerCase = string.toLowerCase()

function sayHiToGrandma(string) {
  if (string === lowerCase){
    console.log("I can\'t hear you!")}
  if (string === upperCase){
    console.log("YES INDEED!")}
  else console.log("I love you, too.")
}
