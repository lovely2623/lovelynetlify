
import "./Card.css";
import { NavLink } from "react-router-dom";
export const Card =({cur})=>{

const {Poster, imdbID} = cur;


    return<>
    <li>
        <div>
            <div>
                <img src={Poster} alt = {imdbID}></img>
            </div>

            <div>
                <div>
                    <NavLink to={`/movies/${imdbID}`}>
                    <button> Watch now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </li>
    
    </>
}