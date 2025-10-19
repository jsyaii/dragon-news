import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';
import Navbar from '../../components/Navbar/Navbar';
import LeftAside from '../LeftAside/LeftAside';
import RightAside from './RightAside/RightAside';

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
           
           
<main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>

 <aside className='col-span-3'>
                <LeftAside></LeftAside>
                
            </aside>



                <section className=" col-span-6">
                    <Outlet></Outlet>
                </section>

<aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
                
                
            </main>
            
             
        </div>
    );
}

export default HomeLayout;
