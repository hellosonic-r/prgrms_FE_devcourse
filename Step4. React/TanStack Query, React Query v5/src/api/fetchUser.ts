import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    console.log('성공', response);
    return response;
  } catch (error) {
    console.log('에러 발생', error);
  }
};

export default fetchData;
