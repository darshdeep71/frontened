import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "./submitted.css"

import tick from "./images/tick.svg"

function Submitted() {

  // function f1() {
  //   localStorage.clear();
  //   window.location.href = "/";
  // }

  return (
    <div style={{backgroundColor: "rgb(245, 243, 243)"}}>

      {/* <Container>
        <Row>
          <Col>
          <button onClick={f1}>Back to first page</button>
          </Col>
        </Row>
      </Container> */}

      <Container className='' style={{backgroundColor: "re", height: "600px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Row style={{backgroundColor: "white", width: "300px", paddingTop: "100px", paddingBottom: "100px", boxShadow: "1px 1px 4px rgb(222, 221, 221)", borderRadius: "15px"}}>
          <Col id='detail'>
          <label>Submitted Successfully</label>
          <img src={tick}></img>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Submitted