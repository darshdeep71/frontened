import React, { useState } from 'react'

function Homepage() {

  let [email, setUname] = useState();
  let [password, setPass] = useState();

  async function submit(b) {
    // alert(uname);

    b.preventDefault();

    if(email==null) {
      alert("empty1")
    }
    else if(password==null) {
      alert("empty2")
    }
    else {
      console.log(email, password)

      let result = await fetch( 'https://backened-uvpn.onrender.com/register', {
        method: 'post',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type':'application/json'},
      } )
      result = await result.json();
      console.log(result);
      alert("submitted");

    }

  }

  return (

    <div>

      <div>
        <form>
          <input type='text' placeholder='email' onChange={(u)=>setUname(u.target.value)}></input> <br></br> <br></br>
          <input type='text' placeholder='password' onChange={(p)=>setPass(p.target.value)}></input> <br></br> <br></br>
          <button onClick={submit}>Signup</button>
        </form>
      </div>
      <br></br>

      <button>checking</button>

    </div>
  )
}

export default Homepage