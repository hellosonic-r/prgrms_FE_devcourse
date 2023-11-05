import PostList from "./PostList.js";
import { request } from "./api.js";

export default function PostsPage({ $target, onPostClick }) {
  const $page = document.createElement("div");
  $target.appendChild($page);

  const $newPostButton = document.createElement("button");
  $newPostButton.textContent = "New Post";
  $page.appendChild($newPostButton);

  const postList = new PostList({
    $target: $page,
    initialState: [],
    onPostClick,
  });

  const fetchPosts = async () => {
    const posts = await request("/posts");

    postList.setState(posts);
  };

  fetchPosts();
}
