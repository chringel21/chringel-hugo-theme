/** Shamelessly ripped from https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/ */

function addCodeCopyButtons(clipboard) {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    let button = createEl("button");
    const copyHtml =
      '<span class="inline-svg text-gray-700 text-sm"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Copy</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></span> Copy';
    button.className = "copy-code-button";
    button.type = "button";
    button.innerHTML = copyHtml;

    button.addEventListener("click", () => {
      clipboard.writeText(codeBlock.innerText).then(
        () => {
          /* Chrome doesn't seem to blur automatically,
        leaving the button in a focused state. */
          button.blur();

          button.innerHTML =
            '<span class="inline-svg text-gray-700 text-sm"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg></span> Copied!';

          setTimeout(() => {
            button.innerHTML = copyHtml;
          }, 2000);
        },
        (error) => {
          button.innerHTML =
            '<span class="inline-svg text-gray-700 text-sm"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg></span> Error';
        }
      );
    });
    let pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains("highlight")) {
      let highlight = pre.parentNode;
      highlight.parentNode.insertBefore(button, highlight);
    } else {
      pre.parentNode.insertBefore(button, pre);
    }
  });
}

let headingNodes = [],
  results,
  link,
  icon,
  current,
  id,
  tags = ["h2", "h3", "h4", "h5", "h6"];

current = document.URL;

tags.forEach(function (tag) {
  results = document.getElementsByTagName(tag);
  Array.prototype.push.apply(headingNodes, results);
});

const copyHeadingLink = (clipboard) => {
  let deeplink, deeplinks, newLink, parent, target;
  deeplink = "link";
  deeplinks = document.querySelectorAll(`.${deeplink}`);
  if (deeplinks) {
    document.addEventListener("click", (event) => {
      target = event.target;
      parent =
        target.nodeName === "svg"
          ? target.parentNode
          : target.parentNode.parentNode;
      console.log(parent);
      if (
        (target && containsClass(target, deeplink)) ||
        containsClass(parent, deeplink)
      ) {
        event.preventDefault();
        newLink = target.href !== undefined ? target.href : parent.href;
        clipboard.writeText(newLink);
      }
    });
  }
};

if (navigator && navigator.clipboard) {
  addCodeCopyButtons(navigator.clipboard);
  copyHeadingLink(navigator.clipboard);
} else {
  let script = createEl("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
  script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
  script.crossOrigin = "anonymous";
  script.onload = () => {
    addCodeCopyButtons(clipboard);
    copyHeadingLink(clipboard);
  };

  document.body.appendChild(script);
}
