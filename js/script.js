// variables
// sections
let main = document.getElementById("main");
let right_container = document.getElementById("right_container");
let users = document.getElementById("users");
let details = document.getElementById("details");
let chat_list = document.getElementById("chat_list");
let type_group = document.getElementById("type_group");
let chat = document.getElementById("chat");
let messages = document.getElementById("messages");
let search_input = document.getElementById("search_input");
// sections
let closeIcon = document.getElementById("close_icon");
let previewImgId;
// \variables

// oninit
chat_list.style.height = main.offsetHeight - chat_list.offsetTop + "px";
messages.style.height =
  main.offsetHeight - messages.offsetTop - type_group.offsetHeight + "px";
// \oninit

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

function togglePages(page) {
  if (page === "details") {
    if (details.clientWidth === 0) {
      right_container.classList.add("detailsToggle");
    } else {
      right_container.classList.remove("detailsToggle");
    }
  } else if (page === "users") {
    if (users.clientWidth === 0) {
      right_container.classList.add("usersToggle");
    } else {
      right_container.classList.remove("usersToggle");
    }
  }
}

function handleAudio(element) {
  let parent = element.parentElement.parentElement;
  parent.classList.add("playing");
  parent.classList.remove("played");
  let audio = parent.children[0];
  audio.play();
  let duration = Math.round(parent.children[0].duration);
  let barWidthTmp = 100 / duration;
  let barWidth = barWidthTmp;
  let counter = 1;

  const barWidthAnimation = setInterval(function () {
    counter++;
    if (counter === duration) {
      clearInterval(barWidthAnimation);
      setTimeout(function () {
        parent.classList.add("played");
      }, 1000);
    }
    barWidth += barWidthTmp;
    parent.children[2].children[0].style.width = barWidth + "%";
  }, 1000);
}

function recordingToggle(msg) {
  if (msg === "record") {
    chat.classList.add("recording");
  } else if (msg === "type") {
    chat.classList.remove("recording");
  }
}
// functions
