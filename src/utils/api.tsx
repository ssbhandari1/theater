import axios from "axios";




const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjUzZDJlYzI0ZGY5YjIyN2ZmMWEyOThjMzQ5ODI5ZiIsInN1YiI6IjY0ZWEyYjFhMWZlYWMxMDBlMTZhYTQxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCnZXmyuhz1GZOzDh1zlF8jF5eGR3w5bkaHzHQObxf4';

const headers={
    Authorization:"bearer "+ TMDB_TOKEN,
}

export const fetchdataFromApi=async(URL: string)=>{
    
    // const URL='/genre/movie/list'
try {
    const {data}=await axios.get(BASE_URL + URL,{
        headers,
    })
    console.log('data',data)
    return data;
} catch (error) {
    console.log(error)
    return error
}
}