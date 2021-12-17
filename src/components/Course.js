import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Container,
  Button,
} from "reactstrap";

import axios from "axios";
import baseURL from "../api/springapi";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
  //adding function to delete course from database.
  const deleteCourse = (id) => {
    axios.delete(`${baseURL}/courses/${id}`).then(
      (response) => {
        console.log(response);
        console.log("course deleted");
        toast.success("course deleted successfully", {
          position: "bottom-center",
        });
        update(id);
      },
      (error) => {
        console.log(error);
        console.log("error, course not deleted");
        toast.error("something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="font-weight-bold">
            {course.title}
          </CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container>
            <Button color="warning">Update</Button>
            <Button
              onClick={() => {
                deleteCourse(course.id);
              }}
              color="danger ml-2"
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
