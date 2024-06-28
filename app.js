// DOM Elements
const nextDom = document.querySelector("#next");
const prevDom = document.querySelector("#prev");
const carouselDom = document.querySelector(".carousel");
const listItemDown = document.querySelector(".carousel .list");
const thumbnailDom = document.querySelector(".carousel .thumbnail");
const contentButtons = document.querySelectorAll("#content-btn");

// Time settings
const timeRunning = 3000;
let timeAutoNext = 5000;
let runTimeOut;
let autoRunTimeout;

// Click event handlers
nextDom.onclick = () => showSlider("next");
prevDom.onclick = () => showSlider("prev");

// Function to show slider items
function showSlider(type) {
  const itemSlider = document.querySelectorAll(".carousel .list .item");
  const itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    // Move the first item to the end
    listItemDown.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else if (type === "prev") {
    // Move the last item to the beginning
    const positionLastItem = itemSlider.length - 1;
    listItemDown.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  // Clear timeout and remove classes after animation
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  // Reset auto-run timeout
  resetAutoRun();
}

// Function to automatically run the slider
function autoRun() {
  nextDom.click();
}

// Function to reset the auto-run
function resetAutoRun() {
  clearTimeout(autoRunTimeout);
  autoRunTimeout = setTimeout(autoRun, timeAutoNext);
}

// Function to pause the auto-run
function pauseAutoRun() {
  clearTimeout(autoRunTimeout);
}

// Add event listeners to pause on hover and resume on mouse out
[nextDom, prevDom].forEach((button) => {
  button.addEventListener("mouseover", pauseAutoRun);
  button.addEventListener("mouseout", resetAutoRun);
});

contentButtons.forEach((button) => {
  button.addEventListener("mouseover", pauseAutoRun);
  button.addEventListener("mouseout", resetAutoRun);
});

// Start auto-run initially
resetAutoRun();

// // DOM Elements
// const nextDom = document.querySelector("#next");
// const prevDom = document.querySelector("#prev");
// const carouselDom = document.querySelector(".carousel");
// const listItemDown = document.querySelector(".carousel .list");
// const thumbnailDom = document.querySelector(".carousel .thumbnail");

// // Time settings
// const timeRunning = 3000;
// let timeAutoNext = 5000;
// let runTimeOut;
// let autoRunTimeout;

// // Click event handlers
// nextDom.onclick = () => showSlider("next");
// prevDom.onclick = () => showSlider("prev");

// // Function to show slider items
// function showSlider(type) {
//   const itemSlider = document.querySelectorAll(".carousel .list .item");
//   const itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

//   if (type === "next") {
//     // Move the first item to the end
//     listItemDown.appendChild(itemSlider[0]);
//     thumbnailDom.appendChild(itemThumbnail[0]);
//     carouselDom.classList.add("next");
//   } else if (type === "prev") {
//     // Move the last item to the beginning
//     const positionLastItem = itemSlider.length - 1;
//     listItemDown.prepend(itemSlider[positionLastItem]);
//     thumbnailDom.prepend(itemThumbnail[positionLastItem]);
//     carouselDom.classList.add("prev");
//   }

//   // Clear timeout and remove classes after animation
//   clearTimeout(runTimeOut);
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove("next");
//     carouselDom.classList.remove("prev");
//   }, timeRunning);

//   // Reset auto-run timeout
//   resetAutoRun();
// }

// // Function to automatically run the slider
// function autoRun() {
//   nextDom.click();
// }

// // Function to reset the auto-run
// function resetAutoRun() {
//   clearTimeout(autoRunTimeout);
//   autoRunTimeout = setTimeout(autoRun, timeAutoNext);
// }

// // Start auto-run initially
// resetAutoRun();
