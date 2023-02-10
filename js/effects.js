document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const sendTodoDiv = document.getElementById("send");
  const sendBtn = document.getElementById("sendBtn");
  const input = document.getElementById("todoInput");
  const searchBtn = document.getElementById("searchIcon")
  const closeBtn = document.getElementById("closeIcon")
  displayEmptyLayout();

  searchBtn.addEventListener('click', () => {
    let searchBar = document.querySelector('#s-input')
    searchBar.style.display = 'inline';
    searchBar.style.animation = 'showSearchBar';
    searchBar.style.animationDuration = '2s'
    searchBar.focus()
    setTimeout(() => {
      searchBtn.style.display = 'none'
      closeBtn.style.display = 'block'
      closeBtn.style.animation = 'fadeIn'
      closeBtn.style.animationDuration = '1s'
    }, 1600)
  })

  closeBtn.addEventListener('click', () => {
    let searchBar = document.querySelector('#s-input')
    searchBar.style.animation = 'fadeSearchBarOut';
    searchBar.style.animationDuration = '2s'
    setTimeout(() => {
      searchBar.style.display = 'none';
      closeBtn.style.display = 'none'
      searchBtn.style.display = 'block'
      searchBtn.style.animation = 'fadeIn'
      searchBtn.style.animationDuration = '1s'
    }, 1700)
    
    
  })

  input.addEventListener("keyup", () => {
    if (parseInt(input.value.length) >= 2) {
      sendBtn.style.fill = "#3d72fe";
      sendBtn.style.cursor = "pointer";
    } else {
      sendBtn.style.fill = "rgba(0, 0, 0, 0.26)";
      sendBtn.style.cursor = "text";
    }
  });

  sendBtn.addEventListener("click", () => {
    addTodo(input.value);

    // Reset input
    input.value = "";
    sendBtn.style.fill = "rgba(0, 0, 0, 0.26)";
    sendBtn.style.cursor = "text";
  });

  // Funcionalidad al pulsar enter

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      addTodo(input.value);

      input.value = "";
      sendBtn.style.fill = "rgba(0, 0, 0, 0.26)";
      sendBtn.style.cursor = "text";
    } else {
      return;
    }
  });

  // Input effect

  input.addEventListener("focus", () => {
    let line = document.querySelector(".inputFocused");
    line.style.animationName = "focused";
    line.style.width = "100%";
    sendTodoDiv.style.borderBottom = "0px solid gray";
  });
  input.addEventListener("blur", () => {
    let line = document.querySelector(".inputFocused");
    line.style.animationName = "unfocused";
    line.style.width = "0%";
    sendTodoDiv.style.borderBottom = "1px solid gray";
  });
});
