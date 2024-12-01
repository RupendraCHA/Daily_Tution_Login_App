import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/profile.png"

import styles from "../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from "formik"

import { registerValidation } from '../helper/validate'
import { convertToBase64 } from '../helper/convert'

const Password = () => {

    const [file, setFile] = useState()

    const formik = useFormik({
        initialValues :{
            email: '',
            username: '',
            password: ''
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, {profile: file || ''})
            console.log(values)
        }
    })

    const onUpload = async (e) => {
      const base64 = await convertToBase64(e.target.files[0])
      setFile(base64)
    }

  return (
    <div className='container mx-auto'>
        <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass} style={{paddingBottom: "5em"}}>
                <div className="title flex flex-col items-center">
                    <h4 className='text-5xl font-bold mb-2'>Register</h4>
                    <span className='py-4 text-xl w-2/3 text-gray-500 text-center'>
                        Happy to join you.
                    </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                      <label htmlFor='profile'>
                        <img src={file || avatar} className={styles.profile_img} alt='avatar'/>
                      </label>
                      <input onChange={onUpload} type='file' id='profile' name='profile'/>
                    </div>
                    <div className='textbox flex flex-col items-center'>
                        <input {...formik.getFieldProps('email')} className={styles.textbox} type='text' placeholder='Email'/>
                        <input {...formik.getFieldProps('username')} className={styles.textbox} type='text' placeholder='Username'/>
                        <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='Password'/>
                        <button className={styles.btn} type='submit'>Register</button>
                    </div>
                    <div className='text-center pb-6 pt-1'>
                        <span className='text-gray-500'>Already Registered? <Link className="text-red-500 text-[14px] hover:underline" to='/'>Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Password