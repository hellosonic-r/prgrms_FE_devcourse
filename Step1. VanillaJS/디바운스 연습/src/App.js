import PostEditPage from "./PostEditpage.js";
import PostsPage from "./PostsPage.js";
import { request } from "./api.js";
import { getItem } from "./storage.js";

export default function App({ $target }) {
  new PostsPage({
    $target,
    onPostClick: async (id) => {
      const getPost = await request(`/posts/${id}`);
      const localData = getItem(`local-key-${id}`, {});

      if (localData && localData.tempSaveDate > getPost.updated_at) {
        if (confirm("저장되지 않은 데이터를 불러올까요?")) {
          postEditPage.setState(localData);
        } else {
          postEditPage.setState(getPost);
        }
      } else {
        postEditPage.setState(getPost);
      }
    },
  });
  const postEditPage = new PostEditPage({
    $target,
    initialState: { title: "제목", content: "내용" },
  });
}
