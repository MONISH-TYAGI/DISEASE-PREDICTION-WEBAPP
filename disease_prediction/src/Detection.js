import React from 'react'
import Header from './Header'
import PieChart from './PieChart';
import { useState } from 'react';
function Detection() {
    const [selectedImage, setSelectedImage] = useState("https://cdnph.upi.com/sv/ph/og/i/7111522246276/2018/1/15222482497589/v1.5/Study-links-aggressive-brain-tumors-growth-to-single-gene.jpg");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
       
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
       
      };
    return (
    <div className='flex  bg-[#dafffd]  h-auto w-full '>
      <Header ></Header>
      <div className='outer  w-full h-screen mt-72'>
      <div className='inner-1 bg-[#dafffd] w-full h-auto flex justify-center' >
        <div className='  w-1/2 h-full  bg-white  rounded-t-2xl shadow-2xl  pt-4  ' style={{height:"500px"}}>
            <div className=' w-full h-5/6 flex justify-center'>
            <div className='h-full  w-3/4  border   rounded-t-3xl flex-bottom  '>
               
               
                <div className=' w-full bg-[#1AACAC] h-1/6  border flex items-center justify-center border rounded-t-3xl'>
                <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
     className='' />
                    <span className='text-white text-6xl    ' style={{fontFamily:"var(--poppins-font)"}}>Choose File</span>
                </div>
                <div className='bg-yellow-100 w-full h-5/6'>
                {/* <img src="https://cdnph.upi.com/sv/ph/og/i/7111522246276/2018/1/15222482497589/v1.5/Study-links-aggressive-brain-tumors-growth-to-single-gene.jpg " className='w-full h-full rounded-b-3xl'></img> */}
                <img src={selectedImage} className='w-full h-full rounded-b-3xl'></img>
                </div>
            </div>
            </div>
            <div className='w-full  h-rem p-4  flex  items-center justify-center '>
            <button className='bg-[#1AACAC] p-4  w-1/2 h-1/2 rounded-3xl text-white'>Generate</button>
            </div>
        </div>
    
      </div>
      <div className='inner-2  w-full h-1/2 flex bg-[#dafffd] p-6' style={{height:"500px"}}>
      <div className='w-1/2 h-full  bg-white rounded-2xl mr-24 shadow-2xl flex '>
<div className='w-full h-4/5 '>
    <div className=' h-1/2 border  flex  '> 
    <div className='bg-[#1AACAC] w-1/3 h-full flex  '>
       <span className=' text-5xl font-bold text-white m-1'>Report Number :</span> 

    </div>
    <div className='w-2/3 '>
        <span className=' text-5xl font-bold ml-10'>A123C53245FEFEW</span>
    </div>
     </div>
     <div className=' h-1/2 border  flex'> 
    <div className='bg-[#1AACAC] w-1/3 h-full flex '>
       <span className=' text-5xl font-bold text-white  ml-2'>Tumor Result :</span> 
       
    </div>
    <div className='w-2/3 '>
        <span className=' text-5xl font-bold ml-10'>Tumor Detected</span>
    </div>
     </div>
    
    
</div>
</div>
<div className='w-1/2 h-full  bg-white rounded-2xl m-1 shadow-2xl'>
<PieChart />
</div>

      </div>
      <div className='bg-[#dafffd] w-full h-40 flex items-center justify-center'>
        <button className='bg-[#1AACAC] p-4 rounded-2xl text-white'>Send Report to mail</button>
      </div>
      </div>
    </div>
  )
}

export default Detection
