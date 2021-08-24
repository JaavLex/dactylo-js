let sentences = ["He played the game as if his life depended on it and the truth was that it did.",
"People who insist on picking their teeth with their elbows are so annoying!",
"With the high wind warning",
"Fluffy pink unicorns are a popular status symbol among macho men.",
"The fish listened intently to what the frogs had to say.",
"Had he known what was going to happen, he would have never stepped into the shower."]
let selectedSentence = sentences[Randomize()]
let typingArea = document.getElementById("typing-area");
let testResult = document.getElementById("test-result");
let wordsperminute = document.getElementById("words-per-minute");
settext()
var Point = document.getElementById("Points")
var Points = 0
var disabled = false;

var words = selectedSentence.split(" ");

//console.log(splittedstring)
function Randomize(){
  return Math.floor(Math.random() * (sentences.length - 1))
}

function settext(){
  document.getElementById("random-sentence").innerHTML = selectedSentence;
}

function returner(e) {
  if (disabled && e.keyCode != 8) {
    return false;
  } else {
    disabled = false;
  }
}

var start = null;

function testWrittenSentence() {

  if(!start) {
    start = Date.now();
  }

  //typingAreaValue == selectedSentence ? testResult.innerHTML = "JUSTE" : testResult.innerHTML = "FAUX";
  var splittedstring = selectedSentence.split('')
  var splittedinput= typingArea.value.split("")
  //console.log(typingArea.value)
  console.log(splittedinput)
  console.log(splittedstring)

  if(splittedstring[splittedinput.length-1]==splittedinput[splittedinput.length-1]) {
    typingArea.style = "border-style: solid; border-width: 5px; border-color: GREEN; width: 500px; height: 150px;"
  } else {
    typingArea.style = "border-style: solid; border-width: 5px; border-color: RED; width: 500px; height: 150px;"
    disabled = true;
  }
   //console.log(typingArea.value)
   
  if(typingArea.value == selectedSentence){
    typingArea.value = ""
    Points++
    Point.innerHTML = `Points : ${Points}`
    selectedSentence = sentences[Math.floor(Math.random() * (sentences.length - 1))];
    settext();

    let elapsed = (Date.now() - start) / 1000;
    let words_per_minute = words.length * 60 / elapsed;
    words_per_minute = Math.round(words_per_minute * 1000) / 1000;
    wordsperminute.innerHTML = `${words_per_minute} words per minute.`
    start = null;
  }

}
