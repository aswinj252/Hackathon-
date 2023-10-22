import  * as Yup from "yup"

export const  loginSchema = Yup.object({
    email:Yup.string().email().required("Please Enter a Email"),
    password:Yup.string().min(6).required("Please enter your password")
});


export const signupSchema =  Yup.object({
    password:Yup.string().min(6).required("Please enter your password")
});
