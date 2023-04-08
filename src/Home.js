import React from 'react';
import "./styles/Home.css";
import SideNav from './components/sidenav';
import Content from './components/content';

function Home() {

    return (
        <div className='Home'>
            <SideNav />
            <Content />
        </div>

    );
}

export default Home;