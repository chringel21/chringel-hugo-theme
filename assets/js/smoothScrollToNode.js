function smoothScrollToNode(id) {
  var elementToView = document.getElementById(id);
  elementToView.scrollIntoView({
    behavior: "smooth",
  });
}

document.getElementById("bouncing-arrow").onclick = (e) => {
  smoothScrollToNode("featured-post");
  e.target.parentElement.remove();
};
