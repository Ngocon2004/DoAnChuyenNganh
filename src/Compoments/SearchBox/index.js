import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';


const SearchBox = () => {
  return (
    <div className='headerSearch ml-3 mr-3'>
      <input type='text' placeholder='Tìm kiếm sản phẩm...' />
         <Button><IoMdSearch /></Button>                        
       </div>
  );
};
export default SearchBox;