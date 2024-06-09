const node = (name, attrs = {}, content = "") => {
  const node = document.createElement(name);
  for (let i in attrs) {
    node.setAttribute(i, attrs[i]);
  }
  node.innerHTML = content;
  return node;
};

const injectStyle = (id, rules) => {
  if (!document.getElementById(id)) {
    document
      .getElementsByTagName("head")[0]
      .prepend(node("STYLE", { type: "text/css" }, rules));
  }
  return true;
};

export const documents = function (config = {}) {
  let viewer, unsub, documentsLink;

  const STYLES = `
  .geocam-viewer-control-button.geocam-documents-button {
      background-size: 24px 24px;
      background-repeat: no-repeat;
       background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDBIOEM2LjkgMCA2IC45IDYgMnYxNmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjZ6bTQgMThIOFYyaDd2NWg1ek00IDR2MThoMTZ2Mkg0Yy0xLjEgMC0yLS45LTItMlY0em02IDZ2Mmg4di0yem0wIDR2Mmg1di0yeiIvPjwvc3ZnPg==');
    }
  `;

  injectStyle("geocam-documents-button", STYLES);

  this.init = function (geocamViewer) {
    viewer = geocamViewer;
    documentsLink = node("A", {
      title: "Open documents window",
      target: "_blank",
      href: config.href
    });
    documentsLink.appendChild(
      node("DIV", {
        class: "geocam-documents-button geocam-viewer-control-button",
      })
    );
    viewer.addControl(documentsLink, "left-top");
  };

  this.destroy = function () {
    unsub();
    viewer.wrapper.removeChild(needle);
  };
};
