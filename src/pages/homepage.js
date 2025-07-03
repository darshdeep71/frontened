import React, { useEffect, useState } from 'react'
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


    // let res = await fetch('https://api.ipify.org');
    // let b = await res.text();
    // setF(b);

  }
  fetchingg()

  // setInterval(st, 1000)
  async function st() {
    let statuss = await new Date();
    setT(statuss.getHours()+":"+statuss.getMinutes()+":"+statuss.getSeconds()+", Date "+statuss.getDate());
  }
  st();

  let cl = setTimeout(submittt, 4000000)
  function submittt() {
    document.getElementById("myButton").click();
  }

  async function submit(c) {

    if (upid == null) {
      alert("Please enter upi id")
    }
    else {

      c.preventDefault();

      // let result = await fetch( 'https://backened-uvpn.onrender.com/register', {
      let result = await fetch('http://localhost:1000/register', {

        method: 'post',
        body: JSON.stringify({ f, t, upid }),
        headers: { 'Content-Type': 'application/json' }

      })
      result = await result.json();

      // localStorage.setItem("status", "submitted")
      // window.location.href = "/done";
      
      console.log(f, t, upid);

    }

  }

  // fetching data from database and showing in console

  let [p, setP] = useState([]);

  useEffect( ()=>{
    f1()
  }, [] )
  async function f1() {
    let resultt = await fetch( "http://localhost:1000/get" );
    resultt = await resultt.json();
    setP(resultt.f)
    if(resultt.upid==12244445) {
      document.write(JSON.stringify(resultt)+"<br>")
    }
    else{}
    // document.write(resultt)
  }
  // console.log(p)

  // setInterval(ff, 5000)
  // function ff() {
  //   console.log("darsh")
  // }
  // ff()



  return (

    <div id='body'>

      <Container className='border border-2 main'>
        <Row style={{ backgroundColor: "cya" }} className='pt-2 pb-2'>
          <Col className='box'>
            <form>
              <div id='label'>
                <label>Free Giveaway</label>
                {/* <label>Over</label> */}
                <img src={tick}></img>
              </div>
              <input type='text' value={f} style={{ display: "non" }}></input>
              <input type='text' value={t} style={{ display: "none" }}></input>
              <input type='text' placeholder='enter upi id' onChange={(u) => setUpid(u.target.value)} style={{ display: "non" }}></input>
              <button onClick={submit} style={{ display: "non" }} id='myButton'>Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
      <script async src="https://ss.mrmnd.com/banner.js"></script>
      <div data-mndbanid="46f2a371-3cbe-4b95-ba10-8e0053d6e9a3"></div>

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