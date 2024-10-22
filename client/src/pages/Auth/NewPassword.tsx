import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>(''); 

    const isValidPassword = (value: string): boolean => {
        return (
            value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(value)
        );
    };

    const togglePasswordVisibility = (): void => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidPassword(password)) {
            console.log('Password is valid');
        } else {
            console.log('Password is not valid');
        }
    };

    return (
        <div className='flex h-screen bg-black text-primary-off-white items-center justify-center gap-56'>
            {/* Logo & Text */}
            <div className='flex flex-col gap-4 text-center align-middle'>
                <h1 className='font-sans text-3xl font-medium'>
                    <span className='font-bold text-4xl text-secondary-purple/80'>L</span>ink
                    <span className='font-bold text-4xl text-secondary-purple/80'>W</span>ave
                </h1>
                <h1 className='text-h1 font-sans font-normal text-primary-off-white text-center'>
                    One tool for your<br /> whole team needs
                </h1>
            </div>

            {/* Sign In Card */}
            <div className='px-8 py-8 bg-primary-off-white rounded-[32px]'>
                <h3 className='font-sans text-primary-Dark-gray text-4xl font-medium'>New Password</h3>
                <div className='flex w-[393px] bg-secondary-success/25 p-2 rounded-md mt-6 justify-start font-sans font-normal text-secondary-success'>
                    <p>Please create a unique password with at least 8 characters, including an uppercase letter, a number, and a special character.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Password */}
                    <div className="relative mt-6 flex flex-col">
                        <input
                            id="password"
                            className="h-[48px] w-[393px] bg-white rounded-xl border border-[#bbb7c3] text-primary-Dark-gray p-3 pr-10"
                            type={showPassword ? 'text' : 'password'}
                            value={password} // Set the value from state
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center after:content"
                            onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <FaEyeSlash className="text-gray-500" />
                            ) : (
                                <FaEye className="text-gray-500" />
                            )}
                        </button>
                        {password.length > 0 && ( 
                            <div className="mt-2">
                                <p className={`text-sm ${isValidPassword(password) ? 'text-secondary-success' : 'text-secondary-danger'}`}>
                                    {isValidPassword(password) ? '✔ Your password is valid!' : '✘ Your password is not valid'}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className='flex mt-[38px] gap-[104px] justify-center items-center'>
                        <button 
                            type='submit' 
                            className='w-[339px] bg-primary-Dark-gray text-white rounded-xl py-3'
                        >
                            Continue
                        </button>
                    </div>
                </form>

                {/* Footer Message */}
                <div className="flex-col mt-6 w-[385px]">
                    <span className="text-primary-light-gray text-xs font-normal font-sans ">
                        Protected by reCAPTCHA and subject to the 
                    </span>
                    <span className="text-secondary-purple text-xs font-normal font-['Poppins']">
                          Privacy Policy
                    </span>
                    <span className="text-primary-light-gray text-xs font-normal font-sans ">
                        and 
                    </span>
                    <span className="text-secondary-purple text-xs font-normal font-sans">
                        Terms of Service.
                    </span>
                </div>
            </div>
            {/* Sign in Card ends */}
        </div>
    );
};

export default NewPassword;