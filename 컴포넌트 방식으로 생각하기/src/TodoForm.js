function TodoForm({ $target , onSubmit}) {
    const $form = document.createElement('form');

    $target.appendChild($form);
    
    let isInit = false;

    this.render = () => {
        $form.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button>
        `
        if (!isInit) {
            $form.addEventListener('submit', e => {
                e.preventDefault() // 태그의 기본 동작을 off 함 (form의 새로고침 방지)

                const $todo = $form.querySelector('input[name=todo]');
                const text = $todo.value;

                if (text.length > 1) {
                    $todo.value = "";
                    onSubmit(text);
                }
                else {
                    alert('두 글자 이상을 입력해주세요');
                    $todo.value = "";
                }

                // onSubmit(text); // onSubmit에는 관심이 없고 호출만 해줄게
            })
            isInit = true;
        }
        
    }

    this.render();
}


// TodoForm에서 입력받은 값을 TodoList에 넣으려면?
// TodoForm 생성 파라미터에 TodoList 넣고 참조하기? NO (의존성 생김) 
// TodoForm 파라미터에 이벤트 콜백 넣고, text 입력 받으면 해당 콜백을 통해 text 넘기기
