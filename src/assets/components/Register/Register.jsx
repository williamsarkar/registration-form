import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { Result } from "postcss";


const Register = () => {

   const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target .password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
     const user = result.user;
     console.log(user);
    })
     .catch(error=>{
        console.error(error)
     })
   }

    return (
        <div className=" ">
            <div className=" mt-16 mx-auto md:w-1/2">
                <h2 className="text-3xl font-bold ml-44 mb-8 "> Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 border w-3/4 px-4 py-2" placeholder="enter your email" type="email" name="email" />
                    <br />
                    <input className="mb-4 border w-3/4 px-4 py-2" type="password" placeholder="enter your password" name="password" />
                    <br />
                    <input className="mb-4 border w-3/4 btn btn-secondary" type="submit" value="register" />
                </form>
            </div>
        </div>
    );
};

export default Register;