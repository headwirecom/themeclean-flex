class PeregrineIcon extends HTMLElement {
	constructor() {
		super();

		const shadowDom = this.attachShadow({ mode: "open" });

		const wrapperElem = document.createElement("span");
		wrapperElem.setAttribute("class", "wrapper");

		const icon = document.createElement("span");
		icon.setAttribute("class", "icon");
		icon.setAttribute("tabindex", 0);

		let imgUrl;
		if (this.hasAttribute("img")) {
			imgUrl = this.getAttribute("img");
		} else {
			imgUrl = "img/default.png";
		}

		const imgElem = document.createElement("img");
		imgElem.src = imgUrl;
		icon.appendChild(imgElem);

		const styleElem = document.createElement("style");
		styleElem.textContent = `
      .wrapper {
        position: relative;
      }

      img {
        width: 1.2rem;
      }
    `;

		shadowDom.appendChild(styleElem);
		shadowDom.appendChild(wrapperElem);
		wrapperElem.appendChild(icon);
	}
}

if (!customElements.get("peregrine-icon")) {
	customElements.define("peregrine-icon", PeregrineIcon);
}
