function isObj(obj) {
  return obj && typeof obj === "object" && obj !== null ? true : false;
}

function containsClass(el, targetClass) {
  if (isObj(el) && targetClass && el !== document) {
    return el.classList.contains(targetClass) ? true : false;
  }
}

function createEl(element = "div") {
  return document.createElement(element);
}

function pushClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? false : elClass.add(targetClass);
  }
}
