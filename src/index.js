import { documents } from "./lib/documents.js";

export class GeocamViewerDocuments extends HTMLElement {
  constructor() {
    super();
    this.plugin = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("documents init");
  }

  connectedCallback() {
    console.log("documents connected");
    const node = this;
    this.plugin = new documents({href: this.getAttribute("href")});
    const parent = this.parentNode;
    this.viewer = parent.viewer;
    if (this.viewer && this.viewer.plugin) {
      // Call a method on the parent
      this.viewer.plugin(this.plugin);
    } else {
      console.error(
        "GeocamViewerDocuments must be a child of GeocamViewer"
      );
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    this.viewer = null;
    console.log("documents disconnected");
    // Clean up the viewer
  }
}

window.customElements.define(
  "geocam-viewer-documents",
  GeocamViewerDocuments
);
