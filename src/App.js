import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import Home from "./components/Home";

import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import Menus from "./components/Menus";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              {/* <Home /> Adding Routing*/}

              <Route exact path="/" component={Home} />
              <Route exact path="/add-course" component={AddCourse} />
              <Route exact path="/view-courses" component={Allcourses} />
              <Route exact path="/contact" />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
