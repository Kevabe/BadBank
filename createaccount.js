function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
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

      if (label == "password") {
        if (field.length < 8) {
          alert("password is shorter than 8 characters");
          return false;
        }
        
      }



      return true;
  }

  function validateInput() {

    var button = document.getElementById("createaccountsubmit");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var enabled = true;

    if (name.value == "" && email.value == "" && password.value == "") {
      enabled = false;
    }

    if (enabled) {
      setEnable("enable");
    } else {
      setEnable("");
    }

  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setEnable('');
    setShow(true);
  }



  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {setName(e.currentTarget.value); validateInput()}} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value); validateInput()}}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value); validateInput()}}/><br/>
              <button type="submit" disabled = {enable === ""} id = "createaccountsubmit" className="btn btn-light" onClick={handleCreate}  >Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit"  className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
