import toast from 'react-hot-toast'

// Validate Login Page Username

export const usernameValidate = (values) => {
    const errors = usernameVerify({}, values)

    return errors
}


//Validate Password Page Password

export const passwordValidate = (values)=> {
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

// Validate Username

function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username Required")
    }else if(values.username.includes(" ")) {
        error.username = toast.error('Invalid Username....!')
    }

    return error;
}