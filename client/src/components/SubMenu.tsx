import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

interface DropdownProps {
    title: string;
    icon: JSX.Element;
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <li className="text-primary-light-gray flex gap-3 items-center font-Roboto font-semibold text-sm hover:text-primary-off-white cursor-pointer"
                onClick={toggleDropdown}
            >
                {icon}
                <span>{title}</span>
                <IoIosArrowDown className='text-lg' />
            </li>
            {isOpen && (
                <ul className='flex ml-6 flex-col gap-6  -mt-6'>
                    {children}
                </ul>
            )}
        </>
    );
};

export default Dropdown;