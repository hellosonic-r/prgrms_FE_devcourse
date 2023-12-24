import { request } from "./api.js";
import Editor from "./Editor.js";
import { getItem, setItem } from "./storage.js";

export default function PostEditPage({ $target, initialState }) {
  const $page = document.createElement("div");
  $target.appendChild($page);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    editor.setState(this.state);
  };

  let timer = null;

  const editor = new Editor({
    $target,
    initialState: this.state,

    onEditing: (post) => {
      setItem(`local-key-${post.id}`, { ...post, tempSaveDate: new Date() });
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        await request(`/posts/${post.id}`, {
          method: "PUT",
          body: JSON.stringify(post),
        });
      }, 30000);

      console.log(post);
    },
  });
}
