const delay = (delayTime) => {
    return new Promise(resolve => setTimeout(resolve, delayTime))
}

const work = () => {
    console.log('work run');
    delay(1000)
        .then(() => {
            console.log('work 1 completed')
            return delay(1000);
        })
        .then(() => {
            console.log('work 2 completed')
            return delay(3000);
        })
        .then(() => {
            console.log('work 3 completed')
            return delay(1000);
        })
        .then(() => {
            console.log('work all completed')
        })

    console.log('work running...');
} 

work()
