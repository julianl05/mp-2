import styled from "styled-components";
import {useEffect, useState} from "react";
import {User} from "./interfaces/User"
import RandomUser from "./components/RandomUser";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px lilac solid;
    font-family: Arial;
    font-size: calc(3px + 0.8vw);
    background-color: #212121;
`;

const NumUserInputDiv=styled.div`
    display: flex;
    justify-content: center;
`;

const NumUserInput=styled.input`
    width: 30vw;
    margin: 4vw;
    padding: 1vw;
`;

export default function App() {
    const [data, setData] = useState<User[]>([]);
    const [numUsers, setNumUsers] = useState(6);
    useEffect(()=>{
        async function fetchData(): Promise<void> {
            const rawData = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
            const data = await rawData.json();
            // console.log(data.results);
            setData(data.results);
        }
        fetchData()
            .then(() => console.log("Data Fetched Successfuly"))
            .catch((e: Error) => console.log("There was an error: " + e))
    },[numUsers])

    return (
        <>
            <ParentDiv>
                <NumUserInputDiv>
                    <NumUserInput
                        type={`number`}
                        value={numUsers}
                        placeholder={`Number of Users`}
                        onChange={(e)=>setNumUsers(Number(e.target.value))}
                    />
                </NumUserInputDiv>
                <RandomUser data={data}/>
            </ParentDiv>
        </>
    )
}