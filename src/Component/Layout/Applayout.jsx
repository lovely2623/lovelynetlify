import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "./Loading";

const Applayout =()=>{
  
    const navigationhaiye =useNavigation();
console.log(navigationhaiye);

    if(navigationhaiye.state === "loading") return <Loading/>

    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Applayout;