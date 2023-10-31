import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Create from '../pages/Create';
import Preview from '../pages/Preview';
import Edit from '../pages/Edit';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/create' element={<Create />} />
            <Route path='/preview/:id' element={<Preview />} />
            <Route path='/edit/:id' element={<Edit />} />
        </Routes>
    );
}

export default AppRoutes;
