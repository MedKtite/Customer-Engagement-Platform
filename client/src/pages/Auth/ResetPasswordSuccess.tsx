
    export default function ResetPasswordSuccess() {
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

            {/* card */}
            <div className='px-8 py-8 bg-primary-off-white rounded-[32px]'>
                <h3 className='font-sans text-primary-Dark-gray text-4xl font-medium'>  New Password </h3>
                <div className='flex w-[393px] bg-secondary-success/25 p-2 rounded-md mt-6 justify-start font-sans font-normal text-secondary-success'>
                    <p>Your password has been successfully reset. Please sign in with your new password.</p>
                </div>
                <div className='flex mt-[38px] gap-[104px] justify-center items-center'>
                    <button 
                        type='submit' 
                        className='w-[339px] bg-primary-Dark-gray text-white rounded-xl py-3'
                    >
                        Sign In
                    </button>
                </div>

            </div>
        </div>
      )
    }
    