import { useState } from "react";

function LoginForm() {

    const [email , setEmail] = useState ('')
    const [password , setPassword] = useState ('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Login')


    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <h3>Wellcome Back To Minitown-Munches</h3>
            <label htmlFor="email">Email</label>
            <span class="material-icons-outlined">
            email
        </span>

            <input type="email" name="email" id="email" placeholder="@ email" required
            value={email}
            onChange={(event) =>setEmail(event.target.value)}
/><br></br>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password"
            value={password}
            onChange={(event) =>setPassword(event.target.value)} />
            <button type="submit" className="button">Login</button>
        </form>
     );
}

export default LoginForm;