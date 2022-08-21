document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const sendTodoDiv = document.getElementById("send");
  const sendBtn = document.getElementById("sendBtn");
  const input = document.getElementById("todoInput");

  displayEmptyLayout();

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
