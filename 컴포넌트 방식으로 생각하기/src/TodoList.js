
// params.$target : 해당 컴포넌트가 추가 될 dom 엘리먼트
// params.initailState : 해당 컴포넌트의 초기 상태

function TodoList( { $target, initialState }) {
    const $todoList = document.createElement('div');
    $target.appendChild($todoList);
 
    this.state = initialState;
    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }
    this.render = () => {
        // this.state = [{ text: 'js 공부}, {text : '....'}]
        $todoList.innerHTML = `
            <ul>
                ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
            </ul>
        `
    }

    this.render(); // 컴포넌트가 생성이 되자마자 바로 화면에 그리는 효과

}