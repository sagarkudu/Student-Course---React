import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

import baseURL from "./../api/springapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add courses";
  }, []);

  //set the course to load data from database
  const [course, setCourse] = useState({});

  //form handler function for submit
  const handleForm = (e) => {
    console.log(course); //get data check
    postDataToServer(course);
    e.preventDefault();
  };

  //create function to post data on server (create course)
  const postDataToServer = (data) => {
    axios.post(`${baseURL}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course added successfully", {
          position: "bottom-center",
        });

        //making fields blank after submit
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label>Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            //changing course object data from UI to database
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Course title</label>
          <Input
            type="text"
            placeholder="enter title here"
            name="title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Course description</label>
          <Input
            type="textarea"
            placeholder="enter description here"
            id="description"
            name="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success" outline>
            Add Course
          </Button>
          <Button type="reset" color="warning ml-2" outline>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
