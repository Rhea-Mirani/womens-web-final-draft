function main() {
  const historyImageTitles = document.querySelectorAll("#mainstuff>div>h3");
  historyImageTitles.forEach((imageTitle) => {
    imageTitle.addEventListener("click", () => {
      imageTitle.style.color = "#64008F";
      imageTitle.style.fontSize = "34px";
    });
  });
}
