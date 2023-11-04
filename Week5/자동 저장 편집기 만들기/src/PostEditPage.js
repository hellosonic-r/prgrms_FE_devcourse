import { getItem, setItem, removeItem } from "./Storage.js";
import Editor from "./Editor.js";
import { request } from "./Api.js";
import { push } from "./router.js";

export default function PostEditPage({ $target, initialState }) {
    const $page = document.createElement('div');
    
    this.state = initialState;

    let postLocalSaveKey = `temp-post-${this.state.postId}` 
    
    // 로컬에 저장된 값을 불러옴, 만약 없으면 빈 값
    const post = getItem(postLocalSaveKey, {
        title : '',
        content : '',
    })

    /* Editor 추가 */
    let timer = null;

    const editor = new Editor( { 
        $target : $page, 
        initialState : post, // ({title:, content:})
        
        // 타자 칠 때마다 onEditing 발생
        onEditing: (post) => {
            // 만약 타이머가 돌고 있다면, 다시 타이머 초기화
            if (timer !== null) {
                clearTimeout(timer);
            }
            
            // 또 타이머 돌림
            // 5초 안에 새로운 이벤트(onEditing)이 없으면 그제서야 로컬에 넣음
            // 그러니까 타자 치면 1,2,3,,4, 이렇게 초를 세는데
            // 여기서 또 타자를 치면 onEditing 이벤트가 또 발생하게 되고
            // 타이머가 돌고 있는 상태 (!== null) 이니까 clearTimeout으로 타이머를 초기화
            timer = setTimeout( async () => {
                setItem(postLocalSaveKey, {
                    ...post,
                    tempSaveDate: new Date(),
                })

                const isNew = this.state.postId === 'new';
                if (isNew) {
                    const createdPost = await request('/posts', {
                        method : 'POST',
                        body: JSON.stringify(post),
                    })
                    history.replaceState(null, null, `/posts/${createdPost.id}`)
                    removeItem(postLocalSaveKey);
                } else {
                    await request(`/posts/${post.id}`, {
                        method : 'PUT',
                        body : JSON.stringify(post),
                    })
                    removeItem(postLocalSaveKey);

                }
            }, 3000)
        } 
    // 몇 초 이상이 지날때만 저장 => 디바운스 ( 이벤트 지연.... 와우)
    })


    // 
    this.setState = async nextState => {
        if (this.state.postId !== nextState.postId) {
            postLocalSaveKey = `temp-post-${nextState.postId}` 
            
            
            // 현재 postId 를 바꿀 postId로 바꿔줌
            this.state = nextState;

            // 현재 state의 postId를 받아서, 만약 new가 아니면 
            // api 통신으로 post 불러옴
            // 그리고나서 this.setState에 (this.state+불러온 post) 인수로 전달
            await fetchPost();
            return;
        }
        this.state = nextState;
        this.render(); // 화면에 append

        editor.setState(this.state.post ?? {
            title : '',
            content : ''
        }); // 편집기에 그림
    }



    this.render = () => {
        $target.appendChild($page);
    }



    // postId 가 새로운 값이 아니면, 즉 이미 있는 것이라면 
    // api와 통신하여 post에 담아옴
    // 그리고 나서 setState 갱신
    const fetchPost = async () => {
        const { postId } = this.state;

        if (postId !== 'new') {
            const post = await request(`/posts/${postId}`)

            const tempPost = getItem(postLocalSaveKey, {
                title : '',
                content : '',
            })

            if (tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
                if (confirm('저장되지 않은 임시 데이터가 있습니다. 불러올까요?')) {
                    this.setState({
                        ...this.state,
                        post : tempPost,
                    })
                    return;
                }
            }

            this.setState({
                ...this.state,
                post
            })
        }
    }


    const $moveListButton = document.createElement('button');
    $moveListButton.innerHTML = '목록으로';
    $page.appendChild($moveListButton);

    $moveListButton.addEventListener('click' , () => {
        push('/');
    })
}
