import { useLoaderData } from "react-router-dom";
import  {Card} from "../Component/UI/Card";
export const Movies =()=>{

    const moviedData = useLoaderData();
    console.log(moviedData);
    return <>
    <ul className="movies-list"> 
        {moviedData.Search.map((cur)=>{
            return <Card key={cur.imdbID} cur={cur}/>
        })}
        </ul>
    </>
}