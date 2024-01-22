import { Box, Button, Grid, ListItemText, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { selectSingleMovieList, singleMovieActions } from "features/singleMovie/singleMovieSlice";
import { award, movieItem, singleMovie, singleStar } from 'models';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface SingleStarItemProps {
    singleList: singleStar[];
    num:number
}
export default function SingleStarItemPage({
    singleList,
    num
}: SingleStarItemProps) {

    return (
        <div>
            <img
                src={singleList[num%singleList.length]?.image_url}
                style={{ height: "200px" }}
            />

        </div>
    );
}