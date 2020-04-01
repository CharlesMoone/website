import cmHeader from './template/cm-header.mhtml';

class CmHeader extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    cmHeader.content.querySelector('div.navBar').innerHTML = '<ul><li>Home</li></ul>';
    const instance = cmHeader.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
}

customElements.define('cm-header', CmHeader);
