import cmVideo from './template/cm-video.html';

class CmVideo extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const instance = cmVideo.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
}

customElements.define('cm-video', CmVideo);
