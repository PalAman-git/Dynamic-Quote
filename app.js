const quote = document.getElementById("quote");
const button = document.getElementById("btn");
const author = document.getElementById("author");
const tweetButton=document.getElementById("TweetMe");
let realdata='';
let rnum='';


const tweet=()=>{
    let tweetit=`https://twitter.com/intent/tweet?text=${rnum.text}`;
    window.open(tweetit);
}



const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    const data = await fetch(api);
    realdata = await data.json();
    rnum = realdata[Math.floor(Math.random() * 1643)];
    quote.innerText = `${rnum.text}`;
    author.innerText = `-${rnum.author}`;
  } catch (error) {
    console.log(error);
  }
};
button.addEventListener("click", () => {
  getQuotes();
});
getQuotes();

tweetButton.addEventListener('click',tweet);
