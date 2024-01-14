import React from 'react';
import "./EditSec.css"
import { MdDelete,MdEdit } from "react-icons/md";
const EditSec = () => {
    return (
        <div className='editsection'>
            <button className='all'><span><MdEdit /></span>Bulk Action</button>
            <button className='delete'> <span><MdDelete /></span>Delete</button>
            <button className='add'>+ Add Product</button>
        </div>
    );
}

export default EditSec;
