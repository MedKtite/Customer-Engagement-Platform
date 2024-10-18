import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoSettingsSharp, IoBuildSharp, IoLogOut} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";


const DropDown = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  return (
    <div className="relative z-50 -mt-2">
      {/* Button to toggle the dropdown */}
      <button onClick={toggleDropdown} className="flex items-center gap-2">
        <IoIosArrowDown className={`text-2xl text-primary-light-gray transition-transform ${isDropDownVisible ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {/* Dropdown content */}
      {isDropDownVisible && (
        <div className='absolute top-[50px] -right-[37px] w-[250px] flex flex-col border border-primary-lighter-gray bg-primary-dark-slate'>
          <div className='flex flex-col gap-4 border-b border-primary-lighter-gray px-4 py-4'>
            <h3 className='text-primary-light-gray font-sans text-sm'>medktite@gmail.com</h3>
            <div className='flex items-center gap-2'>
              <FaUser className='text-primary-off-white' />
              <h3 className='text-sm text-primary-off-white font-sans font-medium'>My Profile</h3>
            </div>
            <div className='flex items-center gap-2'>
              <CiCreditCard1 className='text-primary-off-white text-xl' />
              <h3 className='text-sm text-primary-off-white font-sans font-medium'>My Plan</h3>
            </div>
          </div>

          <div className='flex flex-col gap-4 border-b border-primary-lighter-gray px-4 py-4'>
            <div className='flex items-center gap-2'>
              <IoSettingsSharp className='text-primary-off-white' />
              <h3 className='text-sm text-primary-off-white font-sans font-medium'>Setting</h3>
            </div>
            <div className='flex items-center gap-2'>
              <FaLocationArrow className='text-primary-off-white' />
              <h3 className='text-sm text-primary-off-white font-sans font-medium'>Senders, Domains</h3>
            </div>
            <div className='flex items-center gap-2'>
              <IoBuildSharp className='text-primary-off-white' />
              <h3 className='text-sm text-primary-off-white font-sans font-medium'>SMTP & API</h3>
            </div>
            <div className='flex items-center gap-2'>
              <MdOutlineSecurity className='text-primary-off-white' />
              <h3 className='text-sm text-primary-off-white font-sans font-medium'>Security</h3>
            </div>
          </div>

          <a href="/login" className='flex gap-4 items-center px-4 py-4 hover:text-secondary-purple'>
            <IoLogOut className='text-primary-off-white text-2xl ' />
            <h3 className='text-sm text-primary-off-white font-sans font-semibold'>Logout</h3>
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDown;