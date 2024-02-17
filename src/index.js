import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Lecon from './comonents/lecon';
import Home from './comonents/home';
import Lecture from './components/lecture';
import Header from './comonents/Header';
import Welcome from './comonents/Welcome';
import Islam from './components/Islam';
import Summaries from './components/Summaries';
import Quiz from './components/Quiz';
import LectureDetail from './components/LectureDetail';
import QuizDetail from './components/QuizDetail';
import SummariesDetail from './components/SummariesDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/home' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/summaries' element={<Summaries />} />
            <Route path='/summaries/:id' element={<SummariesDetail />} />
            {/* <Route path='/islam' element={<Islam />} /> */}
            <Route path='/lectures' element={<Lecture />} />
            <Route  path='/lecon/:week/:lecon' element={<Lecon/>}/>
            <Route  path='/lectures/:id' element={<LectureDetail/>}/>
            <Route  path='/quiz/:id' element={<QuizDetail/>}/>
            
            
          </Routes>

        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
