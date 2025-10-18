import { format } from 'date-fns';
import React from 'react';


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-[450px]' src="../src/assets/logo.png" alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM ,yyyy")}</p>
        </div>
    );
}

export default Header;
