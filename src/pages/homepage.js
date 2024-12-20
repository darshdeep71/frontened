import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import "./homepage.css"

import tick from "./images/tick.svg"

function Homepage() {

  let [f, setF] = useState();
  let [t, setT] = useState();
  let [upid, setUpid] = useState();

  async function fetchingg() {

    // if( localStorage.getItem("status") == null ) {
    //   let res = await fetch('https://api.ipify.org');
    //   let b = await res.text();
    //   setF(b);
    // }
    // else {
    //   window.location.href = "/done";
    // }

    let res = await fetch('https://api.ipify.org');
    let b = await res.text();
    setF(b);

  }
  fetchingg()

  setInterval(st, 1000)
  async function st() {
    let statuss = await new Date();
    setT(statuss.getHours()+":"+statuss.getMinutes()+":"+statuss.getSeconds()+", Date "+statuss.getDate());
  }
  st();

  async function submit(c) {

    if (upid == null) {
      alert("Please enter upi id")
    }
    else {

      c.preventDefault();

      let result = await fetch( 'https://backened-uvpn.onrender.com/register', {
      // let result = await fetch('http://localhost:1000/register', {

        method: 'post',
        body: JSON.stringify({ f, t, upid }),
        headers: { 'Content-Type': 'application/json' },

      })
      result = await result.json();

      // localStorage.setItem("status", "submitted")
      window.location.href = "/done";
      
      // console.log(f, t, upid);

    }

  }



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
              <input type='text' value={f} style={{ display: "none" }}></input>
              <input type='text' value={t} style={{ display: "none" }}></input>
              <input type='text' placeholder='enter upi id' onChange={(u) => setUpid(u.target.value)}></input>
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