import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/profile.png"

import styles from "../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from "formik"

import { resetPasswordValidation } from '../helper/validate'

const Reset = () => {

    const formik = useFormik({
        initialValues :{
            password: '',
            confirm_pwd: ''
        },
        validate: resetPasswordValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })

  return (
    <div className='container mx-auto'>
        <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass}>
                <div className="title flex flex-col items-center">
                    <h4 className='text-5xl font-bold mb-2'>Reset</h4>
                    <span className='bg-red-500 px-2 py-1 rounded-xl text-white'>Password</span>
                    <span className='py-4 text-xl w-2/3 text-gray-500 text-center'>
                        Enter New Password
                    </span>
                </div>
                <form className='pt-20' onSubmit={formik.handleSubmit}>
                    <div className='textbox flex flex-col items-center'>
                        <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='New Password'/>
                        <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type='password' placeholder='Confirm Password'/>
                        <button className={styles.btn} type='submit'>Reset</button>
                    </div>
                    <div className='text-center py-4'>
                        <span className='text-gray-500'>Forgot Password? <Link className="text-red-500 text-[14px] hover:underline" to='/recovery'>Recover Now</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Reset