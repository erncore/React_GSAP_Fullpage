import { Routes, Route } from 'react-router';
import Fullpage from './pages/Fullpage';

// styles
import './assets/global.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Fullpage />} path={'/*'} />
            </Routes>
        </div>
    );
}

export default App;
