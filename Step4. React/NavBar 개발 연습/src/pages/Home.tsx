import { IOnClick } from '../interfaces';

import { Link } from 'react-router-dom';
const Home = ({ onClick }: IOnClick) => {
  const handleClick = () => {
    onClick('mypage');
  };
  return (
    <div>
      Home
      <Link to="/mypage" onClick={handleClick}>
        mypage로 이동
      </Link>
    </div>
  );
};

export default Home;
