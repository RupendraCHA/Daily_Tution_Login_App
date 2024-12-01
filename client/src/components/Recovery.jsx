import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/profile.png"

import styles from "../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from "formik"

import { passwordValidation } from '../helper/validate'

const Recovery = () => {

    const formik = useFormik({
        initialValues :{
            password: ''
        },
        validate: passwordValidation,
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
                    <h4 className='text-5xl font-bold'>Recovery</h4>
                    <span className='py-4 text-[13px] w-2/3 text-gray-500 text-center'>
                        Enter OTP to Recover Password...
                    </span>
                </div>
                <form className='py-20'>
                    <div className='textbox flex flex-col items-center'>
                      <div className='input text-center'>
                        <span className='py-4 text-sm text-gray-500'>Entert 6 digits OTP sent to your email</span>
                        <input className={styles.textbox} type='password' placeholder='OTP'/>
                      </div>
                      <button className={styles.btn} type='submit'>Sign In</button>
                    </div>
                    <div className='text-center py-4'>
                        <span className='text-gray-500'>Can't get OTP? <button className="text-red-500 text-[14px] hover:underline">Resend</button></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Recovery