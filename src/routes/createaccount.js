import React from 'react';
import Card from '../components/card';
import { UserContext } from '../components/user-context';
import validate from '../components/validate';

function CreateAccount() {
    /* Set the Context */
    const ctx = React.useContext(UserContext);

    /* Set the state variables */ 
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [enable, setEnable] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
 
    function handleCreate() {
        console.log(name,email,password);
        if (!validateThis()) return;
        if (!email.includes('@') || !email.includes('.')) {
            setErrorMessage('Check your email address. Must include @ and .');
            return
        }
        if (password.length < 8) {
            setErrorMessage('Your password must be at least 8 characters long');
            return
        }
        setErrorMessage(null);
        ctx.users.push({name:name,email:email,password:password,balance:100,history:[]});
        const newUserIndex = ctx.users.length - 1;
        ctx.currentUser = ctx.users[newUserIndex];
        ctx.userIndex = newUserIndex;
        setShow(false);
    }
    
    
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        setEnable(false);
    }

    /* Validate all fields using the validate function inported from validate */
    const validateThis = () => {
        if (validate(name, 'please enter your name', setStatus) &&
            validate(email, 'please enter your email', setStatus) &&
            validate(password, 'please choose a password', setStatus))
            {
                return true
            } else {
                return false
            };
    };

    /* A function to handle the onChange*/ 
    const makeChange = (e, setThis) => {
        setThis(e.currentTarget.value);
        if (validateThis())
            {setEnable(true)};
    }; 
 
    return (
        <Card
             bgcolor="main"
             header="Create Account"
             status={status}
             body={show ? (
                 <>
                     Name<br/>
                     <input type="input" className="form-control" id="name" placeholder="Enter name" 
                     value={name} onChange={e => {makeChange(e, setName)}}/><br/>Email<br/>
                     <input type="input" className="form-control" id="email" placeholder="Enter email" 
                     value={email} onChange={e => {makeChange(e, setEmail)}}/><br/>Password<br/>
                     <input type="input" className="form-control" id="password" 
                     placeholder="Enter password" value={password} onChange={e => {makeChange(e, setPassword)}}/><br/>
                     <button type="submit" disabled={!enable}className="btn btn-light" onClick={handleCreate}>Create Account</button>
                     <br/><br/>
                     {errorMessage && <h5>{errorMessage}</h5>}
                 </>
             ):(
                 <>
                     <h5>Success! Welcome {ctx.currentUser.name}</h5>
                     <p>Your account has been created, and you are now logged in.</p>
                     <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
 
                 </>
             )}
        
        
        
        
        
        
        
        
        />
    )
 }

 export default CreateAccount;