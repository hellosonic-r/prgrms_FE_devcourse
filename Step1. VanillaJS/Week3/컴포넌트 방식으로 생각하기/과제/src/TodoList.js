function TodoList({$target, initialState, checkTotalCountAtDelete, checkedCnt}) {

    const $div = document.createElement('div');
    $target.appendChild($div);

    this.state = initialState ?? [];

    this.completedCount = 0;


    this.setState = (nextState) => {
        this.state = nextState;
        window.localStorage.setItem('text', JSON.stringify(this.state));
        this.render();
    }

    this.newState = (cnt) => {
        window.localStorage.setItem('line', cnt);
        this.render();
    }



    this.render = () => {
        $div.innerHTML = `
            <ul>
                ${this.state.map(({text , isCompleted}, index) => `<li id="${index}" style="text-decoration: ${isCompleted ? 'line-through' : 'none'};">${text}<button id="${index}">삭제하기</button></li>`).join('')}
            </ul>
        `

        $div.querySelectorAll('li').forEach(($li) => {
            $li.addEventListener('click', (e) => {
                const id = e.target.id;
                // console.log(id);

                const nextState = [...this.state];

                const isCompleted = nextState[id].isCompleted;

                nextState[id].isCompleted = isCompleted ? false : true;
                
            
                

                // let tempCnt = 0;
                // nextState.forEach(({isCompleted}) => {
                //     if (isCompleted == true) tempCnt++;
                // })

                // window.localStorage.setItem('line', tempCnt);

                this.setState(nextState);
                
                
                
                // checkedCnt();
                checkTotalCountAtDelete();
                
                
                // c(tempCnt);

                // console.log(this.state);

            })
        })


        // let tempCnt = 0;
        // this.state.forEach(({isCompleted}) => {
        //     if (isCompleted == true) tempCnt++;
        // })
        // console.log(tempCnt);

        $div.querySelectorAll('button').forEach(($button) => {
            $button.addEventListener('click', (e) => {
                // const tobeDeleteList = e.target.parentElement;
                // tobeDeleteList.remove();
                const id = e.target.id;

                const newState = this.state.filter(({text, isCompleted}, index) => {
                    if (index != id) return {text, isCompleted};
                })
                // console.log(newState)

                let tempCnt = 0;
                newState.forEach(({isCompleted}) => {
                    if (isCompleted == true){
                        tempCnt += 1;
                    }
                }) 
                this.setState(newState);
                this.newState(tempCnt);


                checkTotalCountAtDelete();
                e.stopImmediatePropagation();

                
            })
        })

    
    }

    this.render();

}