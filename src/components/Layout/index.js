import React from 'react';

import Navbar from '../Navbar/';
import Films from '../Films';
import './style.css'

const Layout = (props) => (
    <div>
        <Navbar />
        <div className="banner">
        </div>
        <Films />
    </div>
)

export default Layout;