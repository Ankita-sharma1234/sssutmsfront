// import React from "react";
// import Header from "../Register&Login/Header";
// import {Link} from "react-router-dom"
// import { Container, Row, Col, Card } from "react-bootstrap";

// const Erp = () => {
//   return (
//     <div>
//       <Header />

//       <Container className="my-5">
//         <Row>
//            <Col md={6}>
//               <Link to="/studentlogin"> {/* Add this Link component */}
//                 <Card className="shadow">
//                   <Card.Body>
//                     <Card.Title>Student Login</Card.Title>
//                     <Card.Text>
//                       This is a student login you can click here and go to Student Login.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Link>
//             </Col>
//             <Col md={6}>
//               <Link to="/adminlogin"> {/* Add this Link component */}
//                 <Card className="shadow">
//                   <Card.Body>
//                     <Card.Title>HOD Login</Card.Title>
//                     <Card.Text>
//                     This is a Hod login you can click here and go to Hod Login.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Link>
//             </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Erp;

import React from "react";
import { Link } from "react-router-dom";
import "./Erp.css";
import Header2 from "./Header2"

function Cards() {
  return (
    <>
    <Header2/>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <div className="container" style={{ marginTop: 30 }}>
        <div className="row"></div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-image" style={{ color: "#213661" }}>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/education-science-linear-black-green/2048/Login-1024.png"
                    style={{ width: "100px", height: "100px" }}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                  ></img>
                </div>

                <p className="card-text ">
                  <Link to="/studentlogin">
                    {" "}
                    <h4>STUDENT LOGIN</h4>{" "}
                  </Link>
                  Click here for Student Login
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-image" style={{ color: "#5e371b" }}>
                  <img
                    src="https://en.pimg.jp/038/993/371/1/38993371.jpg"
                    style={{ width: "120px", height: "100px" }}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                  ></img>
                </div>
                <p className="card-text">
                  <Link to="/adminlogin">
                    {" "}
                    <h4>EMPLOYEE LOGIN</h4>{" "}
                  </Link>
                  Click here for Employee Login
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-image" style={{ color: "#bc3330" }}>
                  <img
                    src="https://cdn.vectorstock.com/i/1000x1000/28/56/ticket-icon-on-white-background-vector-38072856.webp"
                    style={{ width: "100px", height: "100px" }}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                  ></img>
                </div>
                <p className="card-text">
                  <h4>SISTec TICKET PORTAL</h4>
                  Raise the ticket to solve the issue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row"></div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-image" style={{ color: "#213661" }}>
                  <img
                    src="https://www.shareicon.net/data/128x128/2016/09/23/833199_book_512x512.png"
                    style={{ width: "100px", height: "100px" }}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                  ></img>
                </div>
                <p className="card-text ">
                  <h4>LIBRARY</h4>
                  Click here for Libeary Login
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-image" style={{ color: "#5e371b" }}>
                  <img
                    src="https://thumbs.dreamstime.com/z/local-business-icon-142186774.jpg?w=768"
                    style={{ width: "100px", height: "100px" }}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                  ></img>
                </div>
                <p className="card-text">
                  <h4>STORE DEPARTMENT LOGIN</h4>
                  Click here for Store Login.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-image" style={{ color: "#bc3330" }}>
                  <img
                    src="https://cdn.vectorstock.com/i/1000x1000/34/76/certificate-icon-with-rosette-and-check-vector-23403476.webp"
                    style={{ width: "100px", height: "100px" }}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                  ></img>
                </div>
                <p className="card-text">
                  <h4>CERTIFICATE LOGIN</h4>
                  Click here for Certificate Login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
