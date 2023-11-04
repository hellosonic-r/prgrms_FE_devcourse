function getCount() {
    const lists = JSON.parse(localStorage.getItem('text')) ?? [];
    const totalCnt = lists.length;
    const completedCnt = lists.filter((list) => list.isCompleted).length;
    
    return {totalCnt, completedCnt}

}
