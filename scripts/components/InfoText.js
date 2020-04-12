class InfoText {
    constructor(paragraphs) {
        let container = document.createElement('div');
        container.classList.add('info-text');
        paragraphs.forEach(item => {
            let paragraph = document.createElement('p');
            paragraph.classList.add('info-text__paragraph');
            paragraph.innerText = item;
            container.appendChild(paragraph);
        });
        this.el = container;
    }

    mount = () => document.body.appendChild(this.el);
}

export default InfoText;