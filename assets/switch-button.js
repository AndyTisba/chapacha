// <switchButton></switchButton>
class SwitchButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", this.onClick.bind(this));
    this.input = this.querySelector("input");
    this.this.imageWidths = ["165w", "360w", "533w", "720w", "940w", "1000w"];
  }

  toggle() {
    this.input.checked = !this.input.checked;
  }

  onClick(event) {
    event.preventDefault();
    this.toggle();
    const cardImages = document.querySelectorAll(".card__inner img");
    cardImages.forEach((image) => {
      const newSrc = image.dataset[this.input.checked ? "src-1" : "src-2"];
      const newSrcSet = this.imageWidths
        .map((width) => `${newSrc} ${width}`)
        .join(", ");
      image.src = `${newSrc} 533w`;
      image.srcset = newSrcSet;
    });
  }

  connectedCallback() {}

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log("component changed");
  }
  disconnectedCallback() {
    console.log("component unmounted");
  }
}

customElements.define("switch-button", SwitchButton);
