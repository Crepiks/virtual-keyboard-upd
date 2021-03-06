function getButtonTemplate(id = '', label = '', classNames = []) {
  const button = document.createElement('button');

  if (id) {
    button.id = id;
  }

  button.classList.add('keyboard-button', ...classNames);
  button.innerHTML = label;
  return button;
}

class Button {
  constructor(clickHandler, id, label, classNames, options = {}) {
    this.id = id;
    this.label = label;
    this.content = options.content;
    this.isOperating = options.isOperating;
    this.el = getButtonTemplate(id, label, classNames);
    this.el.addEventListener('click', clickHandler);
  }

  activate() {
    if (!this.el.classList.contains('keyboard-button_active')) {
      this.el.classList.add('keyboard-button_active');
    }
  }

  deactivate() {
    if (this.el.classList.contains('keyboard-button_active')) {
      this.el.classList.remove('keyboard-button_active');
    }
  }
}

export default Button;
