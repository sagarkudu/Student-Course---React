
import React, { useEffect } from "react";
import { Container, Jumbotron, Button } from 'reactstrap';

const Home = () => {

    useEffect(() => {
      document.title = "Home";
    }, []);

    return (
        <div>
            <Jumbotron className="text-center">
                <h1 >Learning React</h1>
                <p>Hello students welcome to the course.</p>

                <Container >
                    <Button color="success" outline>Start React</Button>
                </Container>
            </Jumbotron>
        </div>
    );

};

export default Home;