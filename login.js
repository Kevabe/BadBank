function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enable, setEnable] = React.useState('');
  
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),5000);
        alert(label + " is blank");
        return false;
      }

      
        
      


      return true;
  }

  function validateInput() {

    var button = document.getElementById("createaccountsubmit");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var enabled = true;

    if (email.value == "" && password.value == "") {
      enabled = false;
    }

    if (enabled) {
      setEnable("enable");
    } else {
      setEnable("");
    }

  }

  function handleCreate(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    var found = false;
    var mainaccount = "";

    for (let i = 0; i < ctx.users.length; i++) {
      if (email == ctx.users[i].email && password == ctx.users[i].password) {
        found = true
        mainaccount = email;
        break;
      }
    }

    if (found) {

    ctx.main = mainaccount; setShow(false);} else {
      alert("No account with that email and password found");
    }


    
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setEnable('');
    setShow(true);
  }



  return (
    <Card
      bgcolor="primary"
      header="Login to Account"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value); validateInput()}}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value); validateInput()}}/><br/>
              <button type="submit" disabled = {enable === ""} id = "createaccountsubmit" className="btn btn-light" onClick={handleCreate}  >Login to Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit"  className="btn btn-light" onClick={clearForm}>Log into a different account</button>
              </>
            )}
    />
  )
}
