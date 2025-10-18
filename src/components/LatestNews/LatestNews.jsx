import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-5'>

           <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
<Marquee className='flex gap-6 ' speed={60} pauseOnHover={true} >
 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Provident quae possimus id consequuntu</p>

 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Provident quae possimus id consequuntu</p>
              <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Provident quae possimus id consequuntu</p>
</Marquee>

          
        </div>
    );
}

export default LatestNews;
