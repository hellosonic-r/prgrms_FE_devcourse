
const $target = document.querySelector('#app');

function ButtonGroup({
    $target,
    buttons,
}) {
    const $group = document.createElement('div');
    let isInit = false;
    
    this.render = () => {
        if (!isInit) {
            buttons.forEach(({type, ...props}) => {
                if (type === 'toggle') {
                    new ToggleButton( { $target: $group, ...props});
                } else if (type === 'timer') {
                    new TimerButton( { $target: $group, ...props})
                }
 
            })

            $target.appendChild($group);
            isInit = true;  
        }

    }

    this.render();

    
}



function TimerButton({ $target, text, timer = 3000}) {
    const button = new ToggleButton({ $target, text, onClick : () => {
        setTimeout(() => {
            button.setState({
                ...button.state,
                toggled: !button.state.toggled,
            })
        }, timer)

    }})
}

function ToggleButton( { $target , text, onClick }) {
    const $button = document.createElement('button');
    $target.appendChild($button);
    
    this.state = {
        clickCount : 0,
        toggled : false,
    }

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }
    
    this.render = () => {
        $button.textContent = text;

        $button.style.textDecoration = this.state.toggled ? 'line-through' : 'none';
        $button.addEventListener('click', () => {
            if(!this.state.toggled) {
                $button.style.textDecoration = 'line-through';

            
            }else {
                $button.style.textDecoration = 'none';
            }
            
            this.setState({
                clickCount : this.state.clickCount + 1,
                toggled : !this.state.toggled,
            })

            if (onClick) {
                onClick(this.state.clickCount);
            }
            
        })
        
    }
        

    this.render();

}


new ToggleButton( {
    $target : $target,
    text : 'button1',
    onClick : (clickCount) => {
        if (clickCount % 3 === 0) {
            alert('3번째 클릭');
        }
    }
} );

new ToggleButton( {
    $target : $target,
    text : 'button2',

})

new TimerButton( {
    $target : $target,
    text : '3초뒤에 클릭',
})


new ButtonGroup({
    $target : $target,
    buttons : [ { type : 'toggle', text : '토글'}, {type : 'toggle', text: '토글2'}, {
        type : 'timer', text: '타이머',
    }]
})