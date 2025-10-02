import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

const CountryDropDown = () => {
    return (
        <>
        <Button className='countryDrop'>
           <div className="info d-flex flex-column"> 
                 <span className='lable'> Ngôn ngữ </span>
                 <span className='name'> Việt Nam </span>
            </div>
            <span className='ml-auto'> <FaAngleDown /> </span>
        </Button>
        </>
    )
}
export default CountryDropDown;