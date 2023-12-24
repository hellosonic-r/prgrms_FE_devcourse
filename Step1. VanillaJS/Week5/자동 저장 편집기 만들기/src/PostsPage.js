import PostList from "./PostList.js";
import { request } from "./Api.js"
import { push } from "./router.js";

export default function PostPage({
    $target,
    // onPostClick,
}) {
    const $page = document.createElement('div');


    const $newPostButton = document.createElement('button');
    $newPostButton.textContent = 'New Post';
    $page.appendChild($newPostButton);


    $newPostButton.addEventListener('click', () => {
        push('/posts/new');
    })

    
    const postList = new PostList( {
        $target : $page,
        initialState: [],
        // onPostClick,
    })

    const fetchPosts = async () => {
        const posts = await request('/posts')

        postList.setState(posts);
    }


    this.render = async () => {
        await fetchPosts();
        $target.appendChild($page)
    }

    this.render();
}
