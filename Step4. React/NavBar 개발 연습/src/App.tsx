import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Chats from './pages/Chats';
import HomeNavBar from './TopNavBar/HomeNavBar';
import MyPageNavBar from './TopNavBar/MyPageNavBar';
import ChatsNavBar from './TopNavBar/ChatsNavBar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const TopNavBar = () => {
    if (currentPage === 'home') {
      return <HomeNavBar />;
    } else if (currentPage === 'mypage') {
      return <MyPageNavBar />;
    } else if (currentPage === 'chats') {
      return <ChatsNavBar />;
    } else {
      return null;
    }
  };

  const handleClick = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <BrowserRouter>
      {TopNavBar()}
      <Routes>
        <Route path="/" element={<Home onClick={handleClick} />}></Route>
        <Route
          path="/mypage"
          element={<MyPage onClick={handleClick} />}
        ></Route>
        <Route path="/chats" element={<Chats onClick={handleClick} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
