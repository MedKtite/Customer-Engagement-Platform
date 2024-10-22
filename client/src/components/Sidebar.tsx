import { IoIosKeypad, IoMdPersonAdd, IoMdMegaphone, IoMdBrowsers, IoMdText, IoMdRepeat, IoIosStats, IoIosSettings } from "react-icons/io";
import SubMenu from "./SubMenu";

export default function Sidebar() {


    return (
        <div className="w-[200px]  h-full flex flex-col items-center bg-primary-dark-slate border-r border-primary-lighter-gray">
            <div id="menu" className='flex items-center mt-16 '>

                <ul className='flex flex-col items-start gap-12'>
                    <li className="text-primary-light-gray flex gap-3 items-center font-Roboto font-semibold text-sm hover:text-primary-off-white">
                        <IoIosKeypad className='text-lg' />
                        <a href="#">Overview</a>
                    </li>
                    <SubMenu title="Contacts" icon={<IoMdPersonAdd />}>
                        <li className='text-primary-light-gray font-Roboto font-normal text-sm hover:text-primary-off-white'>List</li>
                    </SubMenu>

                    <SubMenu title="Campaigns" icon={<IoMdMegaphone />}>
                        <li className='text-primary-light-gray font-Roboto font-normal text-sm hover:text-primary-off-white'>Email</li>
                        <li className='text-primary-light-gray font-Roboto font-normal text-sm hover:text-primary-off-white'>WhatsApp</li>
                        <li className='text-primary-light-gray font-Roboto font-normal text-sm hover:text-primary-off-white'>SMS</li>
                    </SubMenu>
                    <li className="text-primary-light-gray flex gap-3 items-center font-Roboto font-semibold text-sm hover:text-primary-off-white">
                        <IoMdBrowsers className='text-lg' />
                        <a href="#">Templates</a>
                    </li>
                    <li className="text-primary-light-gray flex gap-3 items-center font-Roboto font-semibold text-sm hover:text-primary-off-white">
                        <IoMdText className="text-lg" />
                        <a href="#">Conversations</a>
                    </li>
                    <li className="text-primary-light-gray flex gap-3 items-center font-Roboto font-semibold text-sm hover:text-primary-off-white">
                        <IoMdRepeat className="text-lg" />
                        <a href="#">Web scraping</a>
                    </li>
                    <li className="text-primary-light-gray flex gap-3 items-center font-Roboto font-semibold text-sm hover:text-primary-off-white">
                        <IoIosStats className="text-lg" />
                        <a href="#">Report</a>
                    </li>
                </ul>
                <button className=' absolute bottom-6 flex  gap-3 items-center bg-primary-Dark-gray text-md font-roboto text-white rounded-md px-6 py-2'>
                    <IoIosSettings className="text-xl text-primary-off-white" />
                    Settings
                </button>

            </div>
        </div>
    );
}
