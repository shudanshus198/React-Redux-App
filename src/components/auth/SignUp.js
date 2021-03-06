import { useState } from "react";

const SignUp = () => {

    const [mailId,setMailId] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const signUpDetails = {
            firstName,
            lastName,
            mailId,
            password,
        }

        console.log(signUpDetails);
        
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                            SignUp
                </h5>
                <div className="input-field">
                    <label htmlFor="firstname">FirstName</label>
                    <input type="text" 
                        value={firstName} 
                        id="firstname" 
                        required
                        onChange={e => setFirstName(e.target.value)}
                    />

                </div>

                <div className="input-field">
                    <label htmlFor="lastname">LastName</label>
                    <input type="text" 
                        value={lastName} 
                        id="lastname" 
                        required
                        onChange={e => setLastName(e.target.value)}
                    />

                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                        value={mailId} 
                        id="email" 
                        required
                        onChange={e => setMailId(e.target.value)}
                    />

                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                         id="password"
                         value={password}
                         required
                         onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn pink lighten-1 z-depth-0">
                    SignUp
                </button>
            </form>
        </div>
     );
}
 
export default SignUp;