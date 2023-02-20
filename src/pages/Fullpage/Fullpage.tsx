import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Transiton from '../../components/Transiton';
import Contacts from './Contacts/Contacts';
import st from './fullpage.module.scss';
import Home from './Home/Home';

const Fullpage: React.FC = () => {
    return (
        <div className={st.fullpage}>
            <Transiton />
            <div className={st.header}>
                <Link to={'home'} className={st.link}>
                    Home
                </Link>
                <Link to={'contacts'} className={st.link}>
                    Contacts
                </Link>
            </div>

            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
};
export default Fullpage;
