import {useState} from "react";
import UserImage from '@assets/images/signin.png';
const SignUp = () => {
    const [formData, setFormData] = useState({name: "", email: "", password: ""});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const res = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json;
                setSuccess(data.message);
                setFormData({name: "", email: "", password: ""});
            } else {
                const errorData = await res.json();
                setError(errorData.message);
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
        }

    };
  return (
    <div className="mt-15 flex justify-between items-center md:mr-12">
            <img src={UserImage} alt="Sign In" className="hidden md:block w-3/8 h-1/2 object-cover" />
    
            <div className="md:w-95 m-auto w-1/2 flex flex-col justify-between h-90">
                <div className="flex flex-col justify-between h-[78px]">
                    <h1 className="text-4xl font-semibold">Crate an account</h1>
                    <h3>Enter your detail below</h3>
                </div>
    
                <form className="h-65 flex flex-col justify-between items-start" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" className="w-full h-8 border-b-1 focus:outline-none" name="name" onChange={handleChange} value={formData.name}/>
                    <input type="email" placeholder="Email" className="w-full h-8 border-b-1 focus:outline-none" name="email" onChange={handleChange} value={formData.email}/>
                    <input type="password" placeholder='Password' className="w-full h-8 border-b-1 focus: focus:outline-none"name="password" value={formData.password} onChange={handleChange}/>

                    {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm mt-2">
              Error
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="text-green-500 text-sm mt-2">Succeed</div>
          )}
                    <p>Already have account? <a href="/signin" className="text-blue-500">Sign In</a></p>
    
                    <div className="flex w-full justify-between items-center">
                    <button className="flex items-center justify-center flex-col w-full h-14 bg-[#db4444] text-white rounded-sm hover:cursor-pointer">Register</button>
                    
                    </div>
                    
    
                  
    
                </form>
            </div>
        </div>
  )
}

export default SignUp