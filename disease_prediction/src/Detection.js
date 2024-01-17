import React from 'react'
import Header from './Header'
import PieChart from './PieChart';
import { useState } from 'react';
import axios from 'axios';
import LoadingOverlay from './LoadingOverlay';
function Detection() {
    const [selectedImage, setSelectedImage] = useState("https://cdnph.upi.com/sv/ph/og/i/7111522246276/2018/1/15222482497589/v1.5/Study-links-aggressive-brain-tumors-growth-to-single-gene.jpg");
    const [count,setCount]=useState(0);
    const [fileName,setFileName]=useState("ABC1.jpg");
    const [percentage,setPercentage]=useState(0);
    const [result,setResult]=useState("Tumor Not Detected");
    const [loading,setLoading]=useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail =  () => {
    // Implement your email sending logic here
    console.log('Sending email to:', email);
    const emailObj={
      "email":email,
      "percentage":percentage
    }
    try{
    const resp=axios.post("http://localhost:5000/sendingdata",emailObj); 
    }
    catch(err)
    {
      console.log("Error:"+err);
    }
    setEmail(''); 
    closeModal();
  };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
       
      setCount(count+1);
        if (file) {
          const fileName = `ABC${count}.jpg` // Specify the desired file name and extension
              setFileName(fileName);
          // Create a new Blob from the selected file
          const blob = new Blob([file], { type: file.type });
    
          // Create a URL for the Blob
          const blobURL = URL.createObjectURL(blob);
    
          // Create an anchor element to download the image
          const a = document.createElement('a');
          a.href = blobURL;
          a.download = fileName;
    
          // Trigger a click on the anchor element to initiate the download
          a.click();
    
          // Clean up by revoking the Blob URL
          URL.revokeObjectURL(blobURL);
          const imageUrl = URL.createObjectURL(file);
          console.log(imageUrl);
          setSelectedImage(imageUrl);
        }
       
          
       
      };
      const handleChoose=()=>{
        console.log("clicked")
        document.querySelector(".choose").click();
      
      }
      const handleGenerate=async()=>{
        const fileObj={
          "fileName":fileName
        }
        setLoading(true);
        let resp= await axios.post("http://localhost:5000/run",fileObj);
          setLoading(false);
        console.log("hello");
        console.log(resp.data.output);
        setPercentage(resp.data.output);
        if(Number(resp.data.output)<50)
        {
          console.log("hello1")
          setResult("Tumor Not Detected");
          setPercentage(0)
        }else
        {
          console.log("hello2")
          setResult("Tumor Detected");
        }
        window.scrollTo({
          top: window.scrollY + 500,
          behavior: 'smooth',
        });
      }
    return (
    <div className='flex  bg-[#dafffd]  h-auto w-full '>
      <Header ></Header>
      {loading && <LoadingOverlay />}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-70 absolute inset-0 blur-12  "></div>
        </div>
      )}
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
     className='hidden choose' />
                    <span className='text-white text-6xl cursor-pointer    ' style={{fontFamily:"var(--poppins-font)"}} onClick={()=>handleChoose()}>Choose File</span>
                </div>
                <div className=' w-full h-5/6'>
                {/* <img src="https://cdnph.upi.com/sv/ph/og/i/7111522246276/2018/1/15222482497589/v1.5/Study-links-aggressive-brain-tumors-growth-to-single-gene.jpg " className='w-full h-full rounded-b-3xl'></img> */}
                <img src={selectedImage} className='w-full h-full rounded-b-3xl'></img>
                </div>
            </div>
            </div>
            <div className='w-full  h-rem p-4  flex  items-center justify-center '>
            <button className='bg-[#1AACAC] p-4  w-1/2 h-1/2 rounded-3xl text-white' onClick={handleGenerate}>Generate</button>
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
        <span className=' text-5xl font-bold ml-10'>{result}</span>
    </div>
     </div>
    
    
</div>
</div>
<div className='w-1/2 h-full  bg-white rounded-2xl m-1 shadow-2xl'>
<PieChart percentage={percentage} />
</div>

      </div>
      <div className='bg-[#dafffd] w-full h-40 flex items-center justify-center'>
        <button className='bg-[#1AACAC] p-4 rounded-2xl text-white' onClick={openModal}>Send Report to mail</button>
      </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative "style={{"width":"1000px"}}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-4xl font-semibold mb-4">Enter Patient Email</h2>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
              className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 h-1/3"
            />
            <button
              onClick={sendEmail}
              className="bg-[#1AACAC] text-white p-2 rounded w-full hover:bg-black h-fit text-3xl font-semibold"
            >
              Send Email
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detection
