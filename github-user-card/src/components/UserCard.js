import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, UncontrolledCollapse, Button
} from 'reactstrap';
import FollowersData from './FollowersData.js';
import './../App.css'

const UserCard = (props) => {
    return (
        <div className="user-card">
            <Card>
                <CardBody>
                    <CardTitle>
                        <h1>Name: {props.name}</h1>
                    </CardTitle>
                    <CardSubtitle><h2>Username: {props.login}</h2></CardSubtitle>
                </CardBody>
                <img width="20%" src={props.img} alt="Card image cap" className="user-img"/>
                <CardBody>
                    <CardText>Location: {props.location}</CardText>
                    <CardText>Followers: {props.followers}</CardText>
                    {/* Here I can add the expand button */}
                </CardBody>
                <div>
                    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                        Check out my Followers
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                    {props.followersData.map(follower => (
                        <FollowersData img={follower.avatar_url} username={follower.login}/>
                    ))};
                   
                    </UncontrolledCollapse>
                </div>
            </Card>
           
        </div>
    );
};


export default UserCard;




// import React from 'react';
// import FollowersData from './FollowersData.js';

// function UserCard(props) {
//     return (
//         <div>
//             <h1>name: {props.name}</h1>
//             <h2>username: {props.login}</h2>
//             <h2>location: {props.location}</h2>
//             <h2>followers: {props.followers}</h2>
//             <img src={props.img}></img>
//             {props.followersData.map(follower => (
//                 // <h3>{follower.followersUsename}</h3>
//                 <FollowersData img={follower.avatar_url} username={follower.login}/>
//             ))};
//         </div>
//     )
// }

// export default UserCard;