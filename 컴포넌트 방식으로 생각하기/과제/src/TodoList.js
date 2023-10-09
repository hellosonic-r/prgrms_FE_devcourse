function TodoList({$target, initialState}) {

    const $div = document.createElement('div');
    $target.appendChild($div);

    this.state = initialState ?? [];

    this.setState = (nextState) => {
        this.state = nextState;
        window.localStorage.setItem('text', JSON.stringify(this.state));
        this.render();
    }


    



    this.render = () => {
        $div.innerHTML = `
            <ul>
                ${this.state.map(({text , isCompleted}, index) => `<li id="${index}" style="text-decoration: ${isCompleted ? 'line-through' : 'none'};">${text}<button id="bt${index}">삭제하기</button></li>`).join('')}
            </ul>
        `

        $div.querySelectorAll('li').forEach(($li) => {
            $li.addEventListener('click', (e) => {
                const id = Number(e.target.id);

                const nextState = [...this.state];

                const isCompleted = nextState[id].isCompleted;

                nextState[id].isCompleted = isCompleted ? false : true;
                this.setState(nextState);

                console.log(this.state);

            })
        })

        $div.querySelectorAll('button').forEach(($button) => {
            $button.addEventListener('click', (e) => {
                console.log(e.target);
            })
        })
    }

    this.render();

}