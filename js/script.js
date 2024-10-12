
// variables
  // sections
    let main = document.getElementById("main");
    let right_container = document.getElementById("right_container");
    let users = document.getElementById("users");
    let details = document.getElementById("details-sec");
    let chat = document.getElementById("chat");
    let search_input = document.getElementById("search_input");
  // sections

  let closeIcon = document.getElementById("close_icon");
  let previewImgId;
  let barWidthAnimation;
  let audParent;
// \variables


// functions
function onSearchToggle() {
  if (search_input.clientWidth === 0) {
    chat.classList.add("search_clicked");
  } else {
    chat.classList.remove("search_clicked");
  }
}

function previewImageHandle(id) {
  if (id) {
    document.getElementById(id).classList.add("preview");
    main.classList.add("preview_mode");
    previewImgId = id;
    closeIcon.style.display = "block";
  } else {
    document.getElementById(previewImgId).classList.remove("preview");
    main.classList.remove("preview_mode");
    closeIcon.style.display = "none";
  }
}

function togglePages(page, state) {
  if (page === "details") {
    if (state === "show") {
      right_container.classList.add("detailsToggle");
    } else {
      right_container.classList.remove("detailsToggle");
    }
  } else if (page === "users") {
    console.log("users");
    if (state = "show") {
      console.log("users if");
      right_container.classList.add("usersToggle");
    } else {
      right_container.classList.remove("usersToggle");
      console.log("users else");
    }
  }
}

// audio player
let counter = 1;
let duration;
let barWidthTmp;
let barWidth;
let audio;

function handleAudio(element) {
  if (!audio) {
    audParent = element.parentElement.parentElement;
    audio = audParent.children[0];
    duration = Math.round(audParent.children[0].duration);
    barWidthTmp = 100 / duration;
    barWidth = barWidthTmp;
    audio.play();
    audParent.classList.add("playing");
    barWidthAnimation = setInterval(function () {
      counter++;
      if (counter === duration) {
        clearInterval(barWidthAnimation);
        setTimeout(function () {
          audParent.classList.add("played");
        }, 1000);
      }
      barWidth += barWidthTmp;
      audParent.children[2].children[0].style.width = barWidth + "%";
    }, 1000);
  } else if (element) {
    audParent.classList.remove("played");
    audParent.classList.add("playing");
    audio.play();
    barWidthAnimation = setInterval(function () {
      counter++;
      if (counter === duration) {
        clearInterval(barWidthAnimation);
        setTimeout(function () {
          audParent.classList.add("played");
        }, 1000);
      }
      barWidth += barWidthTmp;
      audParent.children[2].children[0].style.width = barWidth + "%";
    }, 1000);
  } else {
    audParent.classList.remove("playing");
    clearInterval(barWidthAnimation);
  }
}
// audio player

function recordingToggle(msg) {
  if (msg === "record") {
    chat.classList.add("recording");
  } else if (msg === "type") {
    chat.classList.remove("recording");
  }
}
// functions
