function detectMob() {
  return window.outerWidth <= 375;
}

const numberList = [
  { id: 1, color: "#000000" },
  { id: 2, color: "#2B8EAD" },
  { id: 3, color: "#333333" },
  { id: 4, color: "#6F98A8" },
  { id: 5, color: "#BFBFBF" },
  { id: 6, color: "#2F454E" },
  { id: 7, color: "#72C3DC" },
  { id: 8, color: "#333333" },
  { id: 9, color: "#2B8EAD" },
];
let numbpad;
let isMobile = detectMob();
function onLoadApp(numberList) {
  const view = (document.getElementById(
    isMobile ? "webView" : "mobileView"
  ).style.display = "none");
  numbpad = document.getElementById(
    isMobile ? "mobile-view-number-pad" : "web-view-number-pad"
  );
  loadNumberpad(numbpad, numberList, detectMob());
}

function loadNumberpad(container, numbersList, isMobile) {
  numbersList.forEach((num) => {
    let para = document.createElement("DIV");
    para.classList.add(!isMobile ? "number" : "number-mobile");
    if (isMobile) {
      para.style.background = `linear-gradient(to right, ${num.color} 0%, ${num.color} 1%, lightGray 1%, lightGray 100%)`;
    } else {
      para.style.backgroundColor = num.color;
    }

    let text = document.createElement("DIV");
    text.classList.add(!isMobile ? "numberText" : "number-mobile-text");
    let t = document.createTextNode(num.id);
    text.appendChild(t);
    para.appendChild(text);
    container.appendChild(para);
  });
}

function sortNumber() {
  numberList.sort(function (a, b) {
    return a.id - b.id;
  });
  numbpad.innerHTML = "";
  loadNumberpad(numbpad, numberList, isMobile);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleNumber() {
  shuffle(numberList);
  numbpad.innerHTML = "";
  loadNumberpad(numbpad, numberList, isMobile);
}

document.onload = onLoadApp(numberList);
