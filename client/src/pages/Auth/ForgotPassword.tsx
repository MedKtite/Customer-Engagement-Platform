import React, { useState } from 'react';

export default function ForgotPassword() {

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const ValidationEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!ValidationEmail(email)) {
      setEmailError('Please enter a valid email address');
    }
    else {
      setEmailError('')          
    }};

  return (
    // Forgot Password Page
    <div  className="flex h-screen bg-primary-Dark-gray text-primary-off-white items-center justify-center gap-56" >
          <div className='flex flex-col gap-4 text-center align-middle'>
          <h1 className='font-sans text-3xl font-medium'><span className='font-bold text-4xl text-secondary-purple'>L</span>ink<span className='font-bold text-4xl text-secondary-purple'>W</span>ave</h1>
          <h1 className='text-h1 font-sans font-normal text-primary-off-white text-center'>One tool for your<br /> whole team needs</h1>
        </div>

        <div className='px-8 py-8 bg-primary-off-white rounded-[32px]'>
          <h3 className='font-sans text-primary-Dark-gray text-4xl font-medium'>Forgot Password</h3>
          
          <div className='flex justify-start gap-1 text-primary-light-gray mt-4 font-poppins font-normal'>
            <p>Enter your email address</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="flex justify-center relative mt-10">
              <label 
                htmlFor="email" 
                className="absolute text-xs font-normal px-1 -top-3 left-4 bg-gradient-to-b from-primary-off-white to-white text-primary-light-gray"
              >
                Email Address
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                className="h-[48px] w-[393px] font-light text-primary-Dark-gray bg-white rounded-xl border border-[#bbb7c3] p-3" 
                placeholder="email@gmail.com" 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {emailError && <p className="text-secondary-danger">{emailError}</p>}

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

          {/* Terms and Privacy */}
          <div className="flex-col mt-6 w-[385px]">
            <span className="text-primary-light-gray text-xs font-normal font-sans leading-[17px]">
              Protected by reCAPTCHA and subject to the 
            </span>
            <span className="text-secondary-purple text-xs font-normal leading-[17px]">Cuboid Privacy Policy</span>
            <span className="text-primary-light-gray text-xs font-normal font-sans leading-[17px]"> and </span>
            <span className="text-secondary-purple text-xs font-normal font-sans leading-[17px]">Terms of Service.</span>
          </div>
        </div>

    </div>
  )
  }
