const c = (n, e = {}, o = "") => {
  const t = document.createElement(n);
  for (let i in e)
    t.setAttribute(i, e[i]);
  return t.innerHTML = o, t;
}, d = (n, e) => (document.getElementById(n) || document.getElementsByTagName("head")[0].prepend(c("STYLE", { type: "text/css" }, e)), !0), r = function(n = {}) {
  let e, o, t;
  d("geocam-documents-button", `
  .geocam-viewer-control-button.geocam-documents-button {
      background-size: 24px 24px;
      background-repeat: no-repeat;
       background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDBIOEM2LjkgMCA2IC45IDYgMnYxNmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjZ6bTQgMThIOFYyaDd2NWg1ek00IDR2MThoMTZ2Mkg0Yy0xLjEgMC0yLS45LTItMlY0em02IDZ2Mmg4di0yem0wIDR2Mmg1di0yeiIvPjwvc3ZnPg==');
    }
  `), this.init = function(s) {
    e = s, t = c("A", {
      title: "Open documents window",
      target: "_blank",
      href: n.href
    }), t.appendChild(
      c("DIV", {
        class: "geocam-documents-button geocam-viewer-control-button"
      })
    ), e.addControl(t, "left-top");
  }, this.destroy = function() {
    o(), e.wrapper.removeChild(needle);
  };
};
class u extends HTMLElement {
  constructor() {
    super(), this.plugin = null, console.log("documents init");
  }
  connectedCallback() {
    console.log("documents connected"), this.plugin = new r({ href: this.getAttribute("href") });
    const e = this.parentNode;
    this.viewer = e.viewer, this.viewer && this.viewer.plugin ? this.viewer.plugin(this.plugin) : console.error(
      "GeocamViewerDocuments must be a child of GeocamViewer"
    );
  }
  disconnectedCallback() {
    this.plugin = null, this.viewer = null, console.log("documents disconnected");
  }
}
window.customElements.define(
  "geocam-viewer-documents",
  u
);
export {
  u as GeocamViewerDocuments
};
