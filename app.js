const quote = document.getElementById("quote");
const button = document.getElementById("btn");
const author = document.getElementById("author");

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    const data = await fetch(api);
    const realdata = await data.json();
    let rnum = realdata[Math.floor(Math.random() * 1643)];
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
