import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action"  tag="a" to="/">
        Home
      </Link>

      <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">
        Add Course
      </Link>

      <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses">
        View Courses
      </Link>

      <Link className="list-group-item list-group-item-action" tag="a" to="#">
        About
      </Link>

      <Link className="list-group-item list-group-item-action" tag="a" to="#">
        Contact
      </Link>
    </ListGroup>
  );
};

export default Menus;
