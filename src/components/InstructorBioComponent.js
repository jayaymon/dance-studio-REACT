import React from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function InstructorBio(props) {
    const directory = props.instructors.map(instructor => {
        return (
            <React.Fragment key={instructor.id}>
                <div className="row">
                    <div className="col my-4">
                        <Media>
                            <img className="d-none d-md-block" src={instructor.image} alt={instructor.name} height="340" />
                            <Media body className="align-self-center ml-5">
                                <Media heading className="media-heading">
                                    {instructor.name}
                                </Media>
                                <p>{instructor.description}</p>
                            </Media>
                        </Media>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 my-4 embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={instructor.video} title={instructor.name} allowfullscreen></iframe>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Dance Instructors</BreadcrumbItem>
                    </Breadcrumb>
                    <h1>Meet our Instructors</h1>
                    <hr />
                </div>
            </div>
            {directory}
        </div>
    );
}

export default InstructorBio;