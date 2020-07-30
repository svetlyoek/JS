const buttonTypes = ['primary', 'accent', 'warn'];

class AppButton extends HTMLButtonElement {

    static get observedAttributes() {

        return ['text', 'btn-type'];
    }

    set btnType(newValue) {

        if (this._btnType) {

            this.classList.remove(this._btnType);

        } else if (!this._btnType && buttonTypes.indexOf(newValue) > -1) {

            this.classList.add(newValue);
            this._btnType = newValue;
        }
    }

    set text(newValue) {

        this.textContent = newValue;
    }

    constructor() {

        super();

        this.classList.add('btn');

        console.log('Button was created!');
    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (name == 'btn-type') {

            this.btnType = newValue;

        } else if (name == 'text') {

            this.text = newValue;
        }
    }
}

customElements.define('app-button', AppButton, { extends: 'button' });