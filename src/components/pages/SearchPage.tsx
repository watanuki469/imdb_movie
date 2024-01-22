import { Button } from "@mui/material";
import { searchItem } from 'models';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface SearchPageProps {
    searchItemList: searchItem[];
}

export default function SearchPage({
    searchItemList,
}: SearchPageProps) {
    const [visibleMovies, setVisibleMovies] = useState(4);

    const showMoreMovies = () => {
        setVisibleMovies(prevVisibleMovies => prevVisibleMovies + 4);
    };
    let navigate=useNavigate()

    return (
        <div>
            {searchItemList.slice(0, visibleMovies).map((movie, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
                   onClick={() => navigate(`/movie/id/${movie.imdb_id}`)}
                >
                    <img src={movie.image_url} alt="" style={{ marginRight: '10px', height: '100px' }} />
                    <div>
                        <p style={{ marginBottom: '5px' }}>{movie.title}</p>
                        <p>Rating: {movie.rating}</p>
                        <p>Year: {movie.year}</p>
                    </div>
                </div>
            ))}
            {searchItemList.length > visibleMovies && (
                <Button variant="contained" sx={{ width: "100%", bgcolor: "red" }} onClick={showMoreMovies}>
                    Xem them...
                </Button>
            )}
            {searchItemList.length === 0 && (
                <Button variant="contained" sx={{ width: "100%" }}>
                    Khong co ket qua...
                </Button>
            )}
        </div>
    );
}
