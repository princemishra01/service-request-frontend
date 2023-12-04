import React from 'react'

const DisplayTable = ({requestArray}) => {

    return (
        <>
            <div className="grid grid-cols-2 m-10 mb-1 gap-[1px]">
                <div className="bg-gray-200 p-4">Title</div>
                <div className="bg-gray-200 p-4">Description</div>
            </div>
            {
                requestArray.map((request, index) => {
                    return (
                        <div key={index} className='grid grid-cols-2 mr-10 ml-10 gap-[1px]'>
                            <div className="bg-gray-100 p-4">{request.title}</div>
                            <div className="bg-gray-100 p-4">{request.description}</div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default DisplayTable