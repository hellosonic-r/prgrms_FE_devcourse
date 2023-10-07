const $button1 = document.createElement('button')
$button1.textContent = 'Button1'

const $button2 = document.createElement('button')
$button2.textContent = 'Button2'

const $button3 = document.createElement('button')
$button3.textContent = 'Button3'


const $main = document.querySelector('#app')

$main.appendChild($button1)
$main.appendChild($button2)
$main.appendChild($button3)


/** 첫 번째 방법 일일이 버튼1,2,3에 스타일을 준다. */
// $button1.addEventListener('click', ()=>{
//     if ($button1.style.textDecoration === 'line-through') {
//         $button1.style.textDecoration = 'none';
//     } else {
//         $button1.style.textDecoration = 'line-through'
//     }
// })

// $button2.addEventListener('click', ()=>{
//     if ($button2.style.textDecoration === 'line-through') {
//         $button2.style.textDecoration = 'none';
//     } else {
//         $button2.style.textDecoration = 'line-through'
//     }
// })

// $button3.addEventListener('click', ()=>{
//     if ($button3.style.textDecoration === 'line-through') {
//         $button3.style.textDecoration = 'none';
//     } else {
//         $button3.style.textDecoration = 'line-through'
//     }
// })



/** 두 번째 방법 querySelectorAll 사용 */
// document.querySelectorAll('button').forEach($button => {
//     $button.addEventListener('click', ()=>{
//         if ($button.style.textDecoration === 'line-through') {
//             $button.style.textDecoration = 'none';
//         } else {
//             $button.style.textDecoration = 'line-through';
//         }
//     })
// })

 

/** 세 번째 방법 target 사용 */
// document.querySelectorAll('button').forEach($button => {
//     $button.addEventListener('click', (e)=>{
//         const { target } = e;
//         if (target.style.textDecoration === 'line-through') {
//             target.style.textDecoration = 'none';
//         } else {
//             target.style.textDecoration = 'line-through';
//         }
//     })
// })


/** 네 번째 방법 함수 정의 */
const checkToggleButton = ($button) => {
    if ($button.style.textDecoration == 'line-through') {
        $button.style.textDecoration = 'none';
    } else {
        $button.style.textDecoration = 'line-through';
    }
}

document.querySelectorAll('button').forEach($button => {
    $button.addEventListener('click', () => {
        checkToggleButton($button);
    })
})


/** 추상화 */
function TimerButton({ $target, text, timer = 3000}) {
    const button = new ToggleButton({ $target, text, onClick: () => {
        setTimeout(() => {
            button.setState({
                ...button.state,
                toggled: !button.state.toggled
            }, timer)
        })
    }})
}
function ToggleButton({$target, text, onClick}) {
    const $button = document.createElement('button');

    this.state = {
        clickCount: 0,
        toggled: false,
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }
    $target.appendChild($button)
    let clickCount = 0;

    this.render = () => {
        $button.textContent = text

        $button.style.textDecoration = this.state.toggled ? 'line-through' : 'none'
        
    }


    $button.addEventListener('click', () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
            toggled: !this.state.toggled
        })
        if ($button.style.textDecoration === 'line-through') {
            $button.style.textDecoration = 'none';
        } else {
            $button.style.textDecoration = 'line-through';
        }

        if (onClick) {
            onClick(this.state.clickCount)
        }

        // if (clickCount % 3 == 0) {
        //     alert('3번째 클릭')
        // }
    })



    this.render()
}

function ButtonGroup({
    $app,
    buttons,
}) {
    const $group = document.createElement('div')
    let isInit = false;

    this.render =() => {
        if (!isInit) {
            buttons.forEach( button => {
                if (button.type === 'toggle') {

                }
            })
        }
    }
}

const $app = document.querySelector('#app');

new ToggleButton({
    $target: $app,
    text: 'Button4',
    onClick: (clickCount) => {
        if (clickCount % 3 == 0){
            alert('3번째 클릭');
        }
    }
})

new ToggleButton({
    $target: $app,
    text : 'Button5',
    onClick: (clickCount) => {
        if (clickCount % 2 == 0) {
            alert('2번째 클릭');
        }
    }
})

new ToggleButton({
    $target: $app,
    text : 'Button6'
})

new ToggleButton({ 
    $target: $app,
    text: 'Button7'
})

new TimerButton({
    $target: $app,
    text: '3초 뒤에 자동으로',
})