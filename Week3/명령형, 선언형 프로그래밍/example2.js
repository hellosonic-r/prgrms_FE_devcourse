const data = [
    {
        name: '나나',
        colors: ['yellow', 'white'],
        age: 7,
        ear: 'unfolded',
    },
    {
        name: '차이',
        colors: ['white', 'yellow', 'brown'],
        age: 3,
        ear: 'unfolded',
    },
    {
        name: '모나',
        colors: ['black', 'white'],
        age: 2,
        ear: 'unfolded',
    },
    {
        name: '레이',
        colors: ['gray', 'white'],
        age: 7,
        ear: 'unfolded',
    },
    {
        name: '가상의 고양이',
        colors: ['gray', 'black'],
        age: 7,
        ear: 'unfolded',
    },
]

// 털 색이 까만색이 포함되어 있으면서
// 귀가 접혀있지 않은 고양이들 뽑기
/** 명령형 프로그래밍 */
function filterCats(cats) {
    let results = [];

    for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];
        if (cat && 
            cat.colors.includes('black') &&
            cat.ear === 'unfolded') {
                results.push(cat.name);
            }
    }

    return results;
}

console.log(filterCats(data));

/** 선언형 프로그래밍 */
function filters2(cats) {
    return cats.filter(cat => cat && 
        cat.colors.includes('black') &&
        cat.ear === 'unfolded').map(cat => cat.name); 
}

console.log(filters2(data));
