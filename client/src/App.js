import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page/Main.js';
import Login from './page/Login.js';
import Blindboard from './page/Blindboard.js';
import Writing from './page/Writing.js';
import Post from './page/Post.js';
import Mypage from './page/Mypage.js';
import Notice from './page/Notice.js';
import Error from './page/Error.js';
import Loading from './page/Loading.js';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/blindboard' element={<Blindboard />} />
				<Route path='/writing' element={<Writing />} />
				<Route path='/post' element={<Post />} />
				<Route path='/mypage' element={<Mypage />} />
				<Route path='/notice' element={<Notice />} />
				<Route path='/error' element={<Error />} />
				<Route path='/loading' element={<Loading />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
