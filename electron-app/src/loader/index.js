let dotCount = 1;
let intervalId = setInterval(() => {
  const loader = document.querySelector("#loader span");
  if (!loader) {
    clearInterval(intervalId);
    return;
  }
  loader.innerText = ".".repeat(dotCount);
  dotCount = (dotCount % 3) + 1;
}, 500);
