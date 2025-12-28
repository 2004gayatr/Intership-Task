function reply(option) {
  const chatBody = document.getElementById("chat-body");

  if (option === "services") {
    chatBody.innerHTML += "<p>💼 We provide Web, Mobile, Cloud & UI/UX solutions.</p>";
  }

  if (option === "technologies") {
    chatBody.innerHTML += "<p>⚙ Technologies: HTML, CSS, JavaScript, React, Node.js</p>";
  }

  if (option === "contact") {
    chatBody.innerHTML += "<p>📞 Contact us at +91 91234 56789</p>";
  }
}

