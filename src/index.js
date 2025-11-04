import { documents } from "./lib/documents.js";

export class GeocamViewerDocuments extends HTMLElement {
  constructor() {
    super();
    this.plugin = null;
    this.viewer = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("documents init");
  }

  connectedCallback() {
    console.log("documents connected");
    const host = this.closest("geocam-viewer");
    if (!host) {
      console.error(
        "GeocamViewerDocuments must be a child of GeocamViewer"
      );
      return;
    }

    const attach = () => {
      const viewer = host.viewer;
      if (viewer && typeof viewer.plugin === "function") {
        if (this.plugin) return;
        this.viewer = viewer;
        this.plugin = new documents({ href: this.getAttribute("href") });
        this.viewer.plugin(this.plugin);
      } else {
        setTimeout(attach, 50);
      }
    };

    attach();
  }

  disconnectedCallback() {
    if (this.plugin && typeof this.plugin.destroy === "function") {
      this.plugin.destroy();
    }
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
