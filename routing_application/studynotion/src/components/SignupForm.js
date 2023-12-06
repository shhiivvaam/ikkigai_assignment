import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("Student");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error('Password do not match!!');
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created Successfully");

        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }

        console.log('Printing Final Account Data')
        console.log(finalData);

        console.log('Printing Account Data')
        console.log(accountData)

        navigate('/dashboard');
    }

    return (
        <div>
            {/* Student Instructor Tab */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                    className={`
                            ${accountType === 'Student'
                            ?
                            'bg-richblack-900 text-richblack-5'
                            :
                            'bg-transparent text-richblack-5'
                        }
                            py-2 px-5 rounded-full transition-all duration-200
                        `}
                    onClick={() => { setAccountType("Student") }}>
                    Student
                </button>
                <button
                    className={`
                            ${accountType === 'Instructor'
                            ?
                            'bg-richblack-900 text-richblack-5'
                            :
                            'bg-transparent text-richblack-200'
                        }
                            py-2 px-5 rounded-full transition-all duration-200
                        `}
                    onClick={() => { setAccountType("Instructor") }}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* First Name and Last Name */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                        />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname}
                        />
                    </label>
                </div>

                {/* Email Address */}
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Email Address<sup>*</sup>
                        </p>
                        <input
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                        />
                    </label>
                </div>

                {/* Create Password and Confirm Password */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password<sup>*</sup>
                        </p>
                        <input
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            required
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                        />
                        {/* <span onClick={() => setShowPassword(!showPassword)}> */}
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword
                                ?
                                <AiOutlineEye fontSize={24} fill='#AFB3BF' />
                                :
                                <AiOutlineEyeInvisible fontSize={24} fill='#AFB3BF' />
                            }
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password<sup>*</sup>
                        </p>
                        <input
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            required
                            type={showConfirmPassword ? 'text' : 'password'}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                        />
                        {/* <span onClick={() => setShowPassword(!showPassword)}> */}
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword
                                ?
                                <AiOutlineEye fontSize={24} fill='#AFB3BF' />
                                :
                                <AiOutlineEyeInvisible fontSize={24} fill='#AFB3BF' />
                            }
                        </span>
                    </label>
                </div>

                <button
                    className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
                    type='submit'>
                    Create Account
                </button>
            </form>
        </div >
    )
}

export default SignupForm