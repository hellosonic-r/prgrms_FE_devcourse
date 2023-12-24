import PostsPage from "./PostsPage.js";
import PostEditPage from "./PostEditPage.js";
import { initRouter } from "./router.js";

// url 규칙
// 루트로 오면: postspage 그리기
// /posts/{id} - id에 해당하는 post 생성
// /posts/new - 새 post 생성

export default function App({ $target }) {
  const postsPage = new PostsPage({
    $target,
    // onPostClick : (id) => {
    //     history.pushState(null, null, `/posts/${id}`);
    //     this.route();
    // }
  });
  const postEditPage = new PostEditPage({
    $target,
    initialState: {
      postId: "new",
      post: { title: "", content: "" },
    },
  });

  // pathname에 따라 어떤 컴포넌트를 렌더링 할것인지
  this.route = () => {
    $target.innerHTML = "";
    const { pathname } = window.location;

    if (pathname === "/") {
      postsPage.render();
    } else if (pathname.indexOf("/posts/") === 0) {
      const [, , postId] = pathname.split("/");
      postEditPage.setState({ postId });
    }
  };

  this.route();

  initRouter(() => this.route());
}
