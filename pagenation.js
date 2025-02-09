const buttonCount = Math.ceil(getDiscussionList().length / 10);
const buttonContainer = document.querySelector(".page-button-container");

for (let i = 0; i < buttonCount; i++) {
  const button = document.createElement("button");
  button.className = `page-button page-button-${i + 1}`;
  button.textContent = i + 1;
  buttonContainer.append(button);

  button.addEventListener("click", function () {
    console.log(button.textContent);
    window.location.href = `${window.location.origin}${window.location.pathname}?pageNo=${i + 1}`;
    window;
  });
}
