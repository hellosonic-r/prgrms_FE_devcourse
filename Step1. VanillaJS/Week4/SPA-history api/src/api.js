// 서버 앞 단의 주소를 상수로 뽑기
const API_END_POINT = 'https://kdt-frontend.programmers.co.kr'

export const request = url => {
    return fetch(`${API_END_POINT}/${url}`)
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(`${res.status} Error 발생`);
      })
      .catch(e => alert(e.message));
}
