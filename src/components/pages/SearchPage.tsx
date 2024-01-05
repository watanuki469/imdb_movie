import { Button } from "@mui/material";
import { searchItem } from 'models';
import { useEffect } from "react";

export interface SearchPageProps {
    searchItemList: searchItem[],
}

export default function SearchPage({
    searchItemList,
}: SearchPageProps) {
    return (
        <div>
            {searchItemList.map(movie => (
                    <div>
                        <img src={movie.image_url} alt=""  />
                        <div>
                            <p>{movie.title}</p>
              
                            <p>Rating: {movie.rating}</p>

                        </div>
                    </div>
            ))}
            {searchItemList.length >= 4 && (
                    <Button variant="contained" sx={{ width: "100%", bgcolor: "red" }}>
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