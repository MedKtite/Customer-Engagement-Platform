import React from 'react';


interface ButtonProps {
    icon?: React.ReactNode;
    onClick?: () => void;
}

const Providers: React.FC<ButtonProps> = ({ icon, onClick }) => {
    
    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center w-[189px] h-12 text-primary-Dark-gray font-sans text-sm font-medium bg-white rounded-xl border border-[#dbdadd] gap-[15px] transition duration-500 ease-in-out hover:border-secondary-purple hover:border"
        >
            <span className="absolute inset-0 border border-secondary-purple rounded-xl opacity-0 hover:opacity-100 hover:backdrop-blur-md transition-opacity duration-500"></span>
            {icon && <span>{icon}</span>} 
        </button>
    );
}

export default Providers;
