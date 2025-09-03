// import { useParams } from "react-router-dom"

import { useLoaderData } from "react-router-dom"


export const MovieDetails=()=>{
        // const params= useParams();
const movieData = useLoaderData();

const {Actor, Poster, Title, Type, Year, Plot,Runtime, BoxOffice, imdbID} = movieData;

    const time = Runtime.replace("min", "");
    const  hours  = Math.floor(time/60);
    const minutes = time % 60 ;
    const finaltime = `${hours}hr  ${minutes}min`;
console.log(finaltime);



    return (
        <>
        <li style={ {listStyle: "none",
        backgroundColor: "#f8f8f8",
        borderRadius: "15px",
        overflow: "hidden",
        width: "300px",
        padding: "20px",
        margin: "50px auto",  // screen ke center me horizontally + thoda top margin
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        height: "auto", // height auto, scrollable if content zyada ho
    }} >
        <div>
            <div>
                <img src={Poster} alt = {Title}></img>
            </div>

            <div>
                <div>
                    <h1> Year : {Year}</h1>
                    <h4> Plot : {Plot}</h4>
                    <h4> time : {finaltime}</h4>
                    <button> Watch now</button>
                </div>
            </div>
        </div>
    </li>
        </>
    )
}