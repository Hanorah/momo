const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["if i'm being honest i don't know what to write so im just gonna write a poem... yesterday was a day to remember, for it gave me a friend i can never forget ever, and celebrating today like it's an exotic holiday, tomorrow i see you as an important part of my life, something even the finest diamonds cant compare to, i can't remember the day we met but i'm pretty sure it was my luckiest day yet, i know i'm being mushy but you probably underestimate your importance to me OH geez now i've gone out of rhyme  ... when i wanted a shoulder to cry on you were there, When i wanted to hear kind words you were there, when i wanted to share a secret you were there, if possible i want to do more than you did in every single way even if i know thats impossible, cus you make me want to be a better person , so on this very special day i just want to say HAPPY BIRTHDAY UNCLE MOMO "];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});




