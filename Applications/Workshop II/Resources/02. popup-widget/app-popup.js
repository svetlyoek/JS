import { html, render } from '../node_modules/lit-html/lit-html.js';

const popUpTemplate = context => html`
<style>
    .wrapper {
      position: relative;
    }

    .info {
      font-size: 0.8rem;
      width: 200px;
      display: inline-block;
      border: 1px solid black;
      padding: 10px;
      background: white;
      border-radius: 10px;
      opacity: 0;
      transition: 0.6s all;
      position: absolute;
      bottom: 20px;
      left: 10px;
      z-index: 3;
    }

    img {
      width: 1.2rem;
    }

    .icon:hover+.info,
    .icon:focus+.info {
      opacity: 1;
    }
  </style>
  <span class="wrapper">
  <span class="icon" tabindex="0">
    <slot name="icon"></slot>
  </span>
  <span class="info">
    <slot name="info"></slot>
  </span>
</span>
`;

class AppPopup extends HTMLElement {

    constructor() {

        super();

        const root = this.attachShadow({ mode: 'closed' });

        this._render = function () {

            const templateResult = popUpTemplate(this);
            render(templateResult, root);
        }

        this._render();

        const img = root.querySelector('slot').assignedElements()[0];
        img.style.width = '1.2rem';
    }

    connectedCallback() {

    }
}
customElements.define('app-popup', AppPopup);