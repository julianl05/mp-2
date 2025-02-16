import styled from "styled-components";
import {User} from "../interfaces/User.ts";

const AllRandUsersDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #212121;
    padding: 4%;
`;

const SingleRandUserDiv=styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #FBF5E5;
    padding:5vh;
    margin:5vh;
    width: 20vw;
`;

const UserProfileImg=styled.img`
    width: 10vw;
    border-radius: 50%;
    margin: 4%;
    align-self: center;
`;

const UserName=styled.h1`
    text-wrap:wrap; //learned myself for wrapping text
`;


export default function RandomUser(props: {data: User[]}) {
    return (
        <AllRandUsersDiv>
            {
                props.data.map((user: User, index: number) => 
                    <SingleRandUserDiv key={index}>
                        <UserProfileImg src={user.picture.large} alt={`image of ${user.name.first}`}/>
                        <UserName>{user.name.first} {user.name.last}</UserName>
                        <p>{user.email}</p>
                        <p>{user.gender}</p>
                        <p>{user.dob.age}</p>
                        <p>{user.dob.age < 26 ? "Young Adult" : "Adult"}</p>
                    </SingleRandUserDiv>
                )
            }
        </AllRandUsersDiv>
    )
}