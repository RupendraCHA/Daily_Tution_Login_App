import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/profile.png"

import styles from "../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from "formik"

import { passwordValidation } from '../helper/validate'

const Password = () => {

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
                    <h4 className='text-5xl font-bold mb-2'>Hello Again</h4>
                    <span className='bg-red-500 px-2 py-1 rounded-xl text-white'>Password</span>
                    <span className='py-4 text-xl w-2/3 text-gray-500 text-center'>
                        Explore more by connecting with us...
                    </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} className={styles.profile_img} alt='avatar'/>
                    </div>
                    <div className='textbox flex flex-col items-center'>
                        <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='Password'/>
                        <button className={styles.btn} type='submit'>Sign In</button>
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

export default Password