import styled from "styled-components";
import {User} from "../interfaces/User.ts";

const AllRandUsersDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 0 4%;
`;

const SingleRandUserDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #FBF5E5;
    padding:5vh;
    margin:5vh;
    width: 25vw;
`;

const UserProfileImg=styled.img`
    width: 10vw;
    border-radius: 50%;
    margin: 4%;
    align-self: center;
`;

const UserName=styled.h1`
    text-wrap:wrap; //learned myself for wrapping text
    margin:1vh;
    padding:1vh;
`;

const UserInfo=styled.p`
    text-wrap:wrap; //learned myself for wrapping text
    margin: 0.5vh;
    padding: 1vh;
`

export default function RandomUser(props: {data: User[]}) {
    return (
        <AllRandUsersDiv>
            {
                props.data.map((user: User, index: number) => 
                    <SingleRandUserDiv key={index}>
                        <UserProfileImg src={user.picture.large} alt={`image of ${user.name.first}`}/>
                        <UserName>{user.name.first} {user.name.last}</UserName>
                        <UserInfo>{user.email}</UserInfo>
                        <UserInfo>{user.gender}</UserInfo>
                        <UserInfo>{user.dob.age}</UserInfo>
                        <UserInfo>{user.dob.age < 26 ? "Young Adult" : "Adult"}</UserInfo>
                    </SingleRandUserDiv>
                )
            }
        </AllRandUsersDiv>
    )
}