// function TodoCount({ $target , initialState}) {
//     const $div = document.createElement('div');

//     $target.appendChild($div);

//     this.state = initialState ?? [];
//     this.checked = 0;

//     this.setState = () => {
//         this.render();
//     }

//     this.newState = () => {
//         this.render();
//     }

    
//     // let CompletedCount = 0;

//     // const currData = JSON.parse(window.localStorage.getItem('text'));
//     // currData.forEach((key) => {
//     //     if (key.isCompleted === true) {
//     //         CompletedCount++
//     //     }
//     // })


//     this.render = () => {
//         $div.innerHTML = `
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         Total : ${JSON.parse(window.localStorage.getItem('text')).length} </br>
//         Completed : ${window.localStorage.getItem('line')}
//         `

//     }

//     this.render();


// }
















function TodoCount({ $target , listCnt}) {
    const $div = document.createElement('div');

    $target.appendChild($div);

    this.totalCnt = listCnt.totalCnt; // 맨처음
    this.completedCnt = listCnt.completedCnt; //맨처음

    this.checked = 0;

    this.setState = (newCnt) => {
        this.totalCnt = newCnt.totalCnt;
        this.completedCnt = newCnt.completedCnt;
        this.render();
    }

    this.newState = () => {
        this.render();
    }

    
    // let CompletedCount = 0;

    // const currData = JSON.parse(window.localStorage.getItem('text'));
    // currData.forEach((key) => {
    //     if (key.isCompleted === true) {
    //         CompletedCount++
    //     }
    // })


    this.render = () => {
        $div.innerHTML = `
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Total : ${this.totalCnt} </br>
        Completed : ${this.completedCnt}
        `

    }

    this.render();


}