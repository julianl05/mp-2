import styled from "styled-components";
import {User} from "../interfaces/User.ts";

const AllRandUsersDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #3D8D7A;
`;

const SingleRandUserDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #B3D8A8;
`;

const UserProfileImg=styled.img`
    border-radius: 50%;
    margin: 4vh
`;

export default function RandomUser(props: {data: User[]}) {
    return (
        <AllRandUsersDiv>
            {
                props.data.map((user: User, index: number) => 
                    <SingleRandUserDiv key={index}>
                        <UserProfileImg src={user.picture.large} alt={`image of ${user.name.first}`}/>
                        <h1>{user.name.first} {user.name.last}</h1>
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