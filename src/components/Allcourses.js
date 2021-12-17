import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Course from "./Course";

import { toast } from "react-toastify";

import baseURL from "./../api/springapi";
import axios from "axios";

//here we are going to return multiple course, so take array of courses
const Allcourses = () => {
  useEffect(() => {
    document.title = "All courses";
  }, []);

  //making function to call the server.
  const getAllCoursesFromServer = () => {
    axios.get(`${baseURL}/courses`).then(
      (response) => {
        //for success
        //console.log(response);

        console.log(response.data);
        toast.success("courses has been loaded...", {
          position: "bottom-center",
        });

        //getting data from database
        setCourses(response.data);
      },
      (error) => {
        //for error
        console.log(error);
        toast.error("something went wrong.");
      }
    );
  };

  //calling the function getAllCoursesFromServer
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([
    //keeping courses blank as they are coming from the database and put this course in setCourses of array.
  ]);

  //solve, course not removed or updated after clicking delete button
  const updateCoursesOnDelete = (id) => {
    //show all courses except id you have passed.
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>All Courses</h1>

      {courses.length > 0
        ? courses.map((item) => (
            <Course
              key={item.id}
              course={item}
              update={updateCoursesOnDelete}
            />
          ))
        : "No courses available"}
    </div>
  );
};

export default Allcourses;
