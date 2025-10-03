import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoMdSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
        <Button className='countryDrop' onClick={ () => setIsOpenModal(true) }>
           <div className="info d-flex flex-column"> 
                 <span className='lable'> Ngôn ngữ </span>
                 <span className='name'> Việt Nam </span>
            </div>
            <span className='ml-auto'> <FaAngleDown /> </span>
        </Button>

    <Dialog TransitionComponent={Transition} open={isOpenModal} onClose={() => setIsOpenModal(false)} className='locationModal'>
            <h4 className='mb-0'>Chọn Ngôn Ngữ</h4>
            <Button className='close_' onClick={ () => setIsOpenModal(false) }><MdClose /></Button>

            <div className='headerSearch w-100'>
                <input type='text' placeholder='Tìm kiếm ngôn ngữ' />
                <Button><IoMdSearch /></Button>                        
            </div>
            <ul className='countryList'>
                <li><Button onClick={()=>setIsOpenModal(false)}>English</Button></li>
                <li><Button onClick={()=>setIsOpenModal(false)}>Vietnamese</Button></li>
                <li><Button onClick={()=>setIsOpenModal(false)}>French</Button></li>
                <li><Button onClick={()=>setIsOpenModal(false)}>German</Button></li>
                <li><Button onClick={()=>setIsOpenModal(false)}>Spanish</Button></li>
                <li><Button onClick={()=>setIsOpenModal(false)}>Chinese</Button></li>
                <li><Button onClick={()=>setIsOpenModal(false)}>Japanese</Button></li>
                <li><Button onClick={()=>setIsOpenModal(false)}>Russian</Button></li>

            </ul>
        </Dialog>
        </>
    )
}
export default CountryDropDown;