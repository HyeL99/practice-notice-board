import 'C:/Users/A/Desktop/Project/notice-board-practice-react/src/App.css';
import BoardPage from './views/BoardPage/BoardPage';
import { Route, Routes } from 'react-router-dom';
import ArticlePage from './views/ArticlePage/ArticlePage';
import RegisterPage from './views/ResisterPage/RegisterPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BoardPage />}/>
        <Route path="/article/:articleID" element={<ArticlePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
