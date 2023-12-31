export default function Editor({ $target, initialState, onEditing }) {
  const $editor = document.createElement("div");
  $target.appendChild($editor);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    $editor.querySelector("input").value = this.state.title;
    $editor.querySelector("textarea").value = this.state.content;
    this.render();
  };

  let isInitialize = false;
  this.render = () => {
    if (!isInitialize) {
      $editor.innerHTML = `
        <input type="text" name="title" style="width:400px;" value="${this.state.title}">
        <textarea name="content" style="width:400px; height:400px;">${this.state.content}</textarea>
    `;
      isInitialize = true;
    }
  };

  this.render();

  $editor.addEventListener("keyup", (e) => {
    const { target } = e;
    const name = target.getAttribute("name");

    if (this.state[name] !== undefined) {
      const nextState = {
        ...this.state,
        [name]: target.value,
      };
      this.setState(nextState);
      onEditing(this.state);
    }
  });
}
