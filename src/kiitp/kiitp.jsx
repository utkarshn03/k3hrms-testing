import React from 'react';
import Header from '../components/header.jsx';
import Table from '../components/table';
import Toast from '../components/toasts.jsx';
import Card from '../components/profilecard.jsx';

const kiitp = () => {
  return (
    <div>
        <Header/>
        <div className='py-8 bg-white rounded-lg w-2/3 px-4 mx-8 mt-20 bg-opacity-80 justify-center'>
            <div className='text-left'>
                <h2 className='text-3xl font-semibold text-green-500  my-4 mx-2'>
                    KIIT Admission
                </h2>
                
                <button className='bg-green-300 btn-sm btn text-black hover:bg-green-500 hover:text-white border-none'>
                    Add Candidate Details
                </button>
            </div>
        <Table/>
        </div>
        <div className='fixed bottom-6 right-6'>
        <Card/>
        </div>
        
        <Toast/>
    </div>
  )
}

export default kiitp