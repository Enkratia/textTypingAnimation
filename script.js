const secText = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    secText.textContent = "Freelancer"
  }, 0);
  setTimeout(() => {
    secText.textContent = "Youtuber"
  }, 4000);
  setTimeout(() => {
    secText.textContent = "Blogger"
  }, 8000);
}

textLoad();

setInterval(textLoad, 12000);