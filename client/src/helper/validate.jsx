import toast from 'react-hot-toast'

//Validate Reset Password

export const resetPasswordValidation = (values) => {
    const errors = passwordVerify({}, values)

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Password not match....!")
    }

    return errors
}



//Validate register form

export const registerValidation = async (values) => {
    const errors = usernameVerify({}, values)
    emailVerify(errors, values)
    passwordVerify(errors, values)
    console.log(errors)

    return errors
}

// Validate Profile Page
export const profileValidation = (values) => {
    const errors = emailVerify({}, values)

    return errors
}


//Validate Password Page Password

export const passwordValidation = (values)=> {
    const errors = passwordVerify({}, values)

    return errors
}

// Validate Password

function passwordVerify(error = {}, values) {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!values.password) {
        error.password = toast.error("Password is  Required....!")
    }else if(values.password.includes(" ")) {
        error.password = toast.error('Wrong Password....!')
    }else if(values.password.length < 4){
        error.password = toast.error('Password must be more than 4 characters long!')

    }else if(!specialChars.test(values.password)) {
        error.password = toast.error('Password must have special characters')
    }

    return error;
}

// Validate Login Page Username

export const usernameValidate = (values) => {
    const errors = usernameVerify({}, values)

    return errors
}

// Validate Username

function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username Required")
    }else if(values.username.includes(" ")) {
        error.username = toast.error('Invalid Username....!')
    }

    return error;
}

// Validate email

function emailVerify(error = {}, values) {
    if (!values.email){
        error.email = toast.error("Email Required....!")
    }else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email....!")
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid email address....!")
    }

    return error
}