import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import "./homepage.css"

import tick from "./images/tick.svg"

function Homepage() {

  let [f, setF] = useState();
  let [upid, setUpid] = useState();

  async function fetching() {

    if( localStorage.getItem("status") == null ) {
      let res = await fetch('https://api.ipify.org');
      let b = await res.text();
      setF(b);
    }
    else {
      window.location.href = "/done";
    }

  }
  fetching()

  async function submit(c) {

    c.preventDefault();

    if (upid == null) {
      alert("Please enter upi id")
    }
    else {
      // console.log(f, upid);

      let result = await fetch( 'https://backened-uvpn.onrender.com/register', {
      // let result = await fetch('http://localhost:1000/register', {

        method: 'post',
        body: JSON.stringify({ f, upid }),
        headers: { 'Content-Type': 'application/json' },

      })
      result = await result.json();

      localStorage.setItem("status", "submitted")
      window.location.href = "/done"
      // console.log(result);
      // alert("submitted");

    }

  }

  // function ft() {
  //   localStorage.clear()
  // }


  return (

    <div id='body'>

      <Container className='border border-2 main'>
        <Row style={{ backgroundColor: "cya" }} className='pt-2 pb-2'>
          <Col className='box'>
            <form>
              <div id='label'>
                <label>Free Giveaway</label>
                <img src={tick}></img>
              </div>
              <input type='text' value={f} placeholder='111' style={{ display: "none" }}></input>
              <input type='text' placeholder='enter upi id' onChange={(u) => setUpid(u.target.value)}></input>
              {/* <input type='text' placeholder='password' onChange={(p) => setPass(p.target.value)}></input> <br></br> <br></br> */}
              <button onClick={submit}>Submit</button>
            </form>
          </Col>
        </Row>
      </Container>

      {/* <button onClick={ft}>testing</button> */}

      {/* <div>
        <form>
          <input type='text' placeholder='email' onChange={(u) => setUname(u.target.value)}></input> <br></br> <br></br>
          <input type='text' placeholder='password' onChange={(p) => setPass(p.target.value)}></input> <br></br> <br></br>
          <button onClick={submit}>Signup</button>
        </form>
      </div>
      <br></br>

      <button>checkinge</button> */}

    </div>
  )
}

export default Homepage