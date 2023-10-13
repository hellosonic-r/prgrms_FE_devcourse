## ✅ Map
- 맵은 키에 다양한 자료형 허용
- 메소드, 프로퍼티
  - <code>new Map()</code> : 맵 생성
  - <code>map.set(key, value)</code> : key를 이용해 value를 저장
  - <code>map.get(key)</code> : key에 해당하는 <code>값 반환</code>
  - <code>map.has(key)</code> : key가 존재하면 <code>true</code>, 존재하지 않으면 <code>false</code> 반환
  - <code>map.delete(key)</code> : key에 해당하는 값 삭제
  - <code>map.clear()</code> : 맵 안의 모든 요소 제거
  - <code>map.size</code> : 요소의 개수 반환 (배열의 length 역할)

```jsx
let map = new Map();

map.set('1', 'str1'); // 문자형 키
map.set(1, 'num1'); // 숫자형 키
map.set(true, 'bool') // 불린형 키

// 객체는 키를 문자형으로 변환하나 
// 맵은 그대로 유지

console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // str1

console.log(map.size); // 3
```
- 맵은 키로 객체 허용


```jsx
let john = {name: john};

let cnt = new Map();
cnt.set(john, 123);

console.log(cnt.get(john)); // 123
```

</br>
</br>

## ✅ 맵의 요소에 반복 작업
- 3가지 메서드를 사용 가능
  - <code>map.keys()</code> : 각 요소의 키를 모은 이터러블(반복가능한) 객체 반환
  - <code>map.values()</code> : 각 요소의 값을 모은 이터러블 객체 반환
  - <code>map.entries()</code> : [키, 값] 이터러블 객체 반환 ( for of )
```jsx
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatose', 350],
    ['onion', 50],
]);

// 키를 대상으로 순회
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion 
}

// 값을 대상으로 순회
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// [키, 값] 대상으로 순회
for (let entry of recipeMap) {
    console.log(entry);
}

// 이렇게 사용 가능
for (let [key, value] of recipeMap.entries()){
    console.log(key);
    console.log(value);
}
```
- 맵은 배열과 유사하게 <code>forEach</code> 지원
```jsx
recipeMap.forEach( (value, key, map) => {
    console.log(`${key} : ${value}`); 
    // cucumber : 500 ...
})
```

</br>
</br>

## ✅ 객체를 맵으로 바꾸기
- Object.entries(obj) 활용 
```jsx
const obj = {
    name: 'Hwang',
    age : 29,
}
const arr = Object.entries(obj);
console.log(arr) // type은 Object임
// [['name', 'Hwang'], ['age', 29]]
```

```jsx
let obj = {
    name : 'john',
    age : 30,
}

let map = new Map(Object.entries(obj));
console.log(map.get('name')); // john 
```

<br/>
<br/>

## ✅ 맵을 객체로 바꾸기
- Object.fromEntries() 활용
```jsx
const arr = [['banana', 1], ['orange', 2], ['meat', 4]];
const obj = Object.fromEntries(arr);
// obj = { 'banana' : 1, ,,}
```


```jsx
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // 맵을 일반 객체로 변환
// map.entries 는 { [], [], } 이런 형태임
```


<br/>
<br/>

## ✅ Set
- 셋은 중복 허용하지 않음
- 주요 메서드
  - <code>new Set(iterable)</code> : 셋을 만든다. 이터러블 객체를 전달받으면 (대개 배열) 그 안의 값을 복사하여 셋에 넣음
  - <code>set.add(value)</code> : 값을 추가하고 셋 자신을 반환
  - <code>set.delete(value)</code> : 값을 제거. 셋 내에 값이 있어서 제거 성공하면 <code>true</code>, 아니면 <code>false</code> 반환
  - <code>set.has(value)</code> : 셋 내에 값이 존재하면 <code>true</code>, 없으면 <code>false</code> 반환
  - <code>set.clear()</code> : 셋을 비운다.
  - <code>set.size</code> : 셋의 길이
  

  </br>
  </br>

## ✅ 셋의 값에 반복 작업하기
- <code>for..of</code> 나 <code>forEach</code> 를 사용하여 셋의 값을 대상으로 반복 작업 수행
```jsx
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) {
    console.log(value);
}

set.forEach((value, valueAgain, set) => {
    alert(value);
});
``` 
- <code>set.keys()</code> : 셋 내의 모든 값을 포함하는 이터러블 객체 반환
- <code>set.values()</code> : <code>set.keys()</code> 와 동일한 작업. <code>맵</code> 과의 호환성을 위한 메서드
- <code>set.entries()</code> : <code>[ value, value ]</code> 배열을 포함하는 이터러블 객체를 반환. <code>맵</code> 과의 호환성 위한 메서드
