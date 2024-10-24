import { IoNotifications } from "react-icons/io5";
import DropDown from "./DropDown";


const Navbar = () => {
  return (
    <div className=' flex justify-between py-3 px-8 bg-primary-dark-slate border-b border-primary-lighter-gray'>
        <div id='logo' className='flex justify-center items-center'>
            <h1 className='font-sans text-3xl font-medium text-white'><span className='font-semibold text-3xl text-primary-off-white'>L</span>ink<span className='font-semibold text-3xl text-primary-off-white'>W</span>ave</h1>
        </div>

        <div>
            <input className='w-full hidden 2xl:w-[920px] xl:w-[720px] lg:w-[520px] md:w-[320px] sm:block text-primary-light-gray border-none pl-4 py-3 rounded-md bg-primary-lighter-gray focus:outline-none focus:ring-1 focus:ring-secondary-purple focus:border-transparent'
                    type='text'
                    placeholder='Search Something...'>
            </input>
        </div>

        <div className='flex justify-end  gap-6 items-center'>
            <h1 className='text-primary-off-white font-sans font-normal'><span className='font-medium'>+ </span>Add</h1>
            <div>
                <IoNotifications className='text-primary-light-gray text-2xl mr-4' />
                <div className="-mt-6 ml-4 absolute w-3 h-3 bg-secondary-danger rounded-xl" />
            </div>
            <DropDown />
        </div>

    </div>
  )
}

export default Navbar