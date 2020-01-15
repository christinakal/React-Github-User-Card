import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, UncontrolledCollapse, Button
} from 'reactstrap';

function FollowersData(props){
    return (
            <Card>
                <CardBody>
                    <CardSubtitle><h2>Username: {props.username}</h2></CardSubtitle>
                </CardBody>
                <img width="20%" src={props.img} alt="Card image cap" className="user-img"/>
                <CardBody>
                    <CardText>Location: {props.location}</CardText>
                    <CardText>Followers: {props.followers}</CardText>
                </CardBody>
            </Card>
        // <div>
        //     <h3>{props.username}</h3>
        //     <img src={props.img}></img>
        // </div>
    )
}

export default FollowersData