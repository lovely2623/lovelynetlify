

export const getMoviesData =async()=>{
    try {
        const response = await fetch (`https://www.omdbapi.com/?s=titanic&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}