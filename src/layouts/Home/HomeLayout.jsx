import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';
import Navbar from '../../components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3.5'>
                <LatestNews></LatestNews>
            </section>
            <section className='w-11/12 mx-auto my-3.5'>
 <Navbar></Navbar>
            </section>
           
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
}

export default HomeLayout;
