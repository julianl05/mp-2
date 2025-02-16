import styled from "styled-components";
import {useEffect, useState} from "react";
import {User} from "./interfaces/User"
import RandomUser from "./components/RandomUser";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px lilac solid;
    font-family: Arial;
    font-size: calc(3px + 1vw);
`;

export default function App() {
    const [data, setData] = useState<User[]>([]);
    useEffect(()=>{
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://randomuser.me/api/?results=6");
            const data = await rawData.json();
            // console.log(data.results);
            setData(data.results);
        }
        fetchData()
            .then(() => console.log("Data Fetched Successfuly"))
            .catch((e: Error) => console.log("There was the error: " + e))
    },[data.length])

    return (
        <>
            <ParentDiv>
                <RandomUser data={data}/>
            </ParentDiv>
        </>
    )
}