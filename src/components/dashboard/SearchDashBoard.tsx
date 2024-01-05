import { Search } from "@mui/icons-material";
import { Box, Fade, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Popper, Select, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SearchLayout from "components/layout/SearchLayout";
import { searchActions, selectSearchList } from "features/search/searchSlice";
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Clear, Loop, Search as SearchIcon } from "@mui/icons-material";
import { useDebounce } from "hook/useDebounce";

export default function SearchDashBoard() {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false);
  const [searchType, setSearchType] = useState('all'); // Khởi tạo giá trị mặc định

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(query, 500);
  console.log(debouncedValue)

  const anchorRef = useRef(null);
  const delay = 2000;

  const searchList = useAppSelector(selectSearchList)
  const handleSearchTypeChange = (event: any) => {
    setSearchType(event.target.value);
  };

  // const onQueryChange = (e: any) => {
  //   const newQuery = e.target.value;
  //   if (!newQuery.startsWith(" ")) {
  //     setQuery(newQuery);
  // }
  //   if (!newQuery) {
  //     setOpen(false); // Đóng Popper nếu không có chữ trên thanh input
  //     return;
  //   }
  //   setOpen(!!newQuery); // Mở Popper khi có nội dung
  //   clearTimeout(timer);
  //   setOpen(true)

  //   timer = setTimeout(() => {
  //   }, timeout);
  // };
  const onQueryChange = (e: any) => {
    const newQuery = e.target.value;
    setOpen(!!newQuery);
    setQuery(newQuery);
  };


  useEffect(() => {
    if (!debouncedValue.trim()) {
      setOpen(false);
      return;
    }
    dispatch(searchActions.fetchSearchList(debouncedValue));
  }, [debouncedValue])

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     if (debouncedValue.trim()) {
  //       dispatch(searchActions.fetchSearchList(debouncedValue));
  //     }
  //   }, delay);
  
  //   // Hủy timer cũ khi giá trị debouncedValue thay đổi
  //   return () => clearTimeout(timerId);
  // }, [debouncedValue]);

  const handleClear = () => {
    setQuery('')
    setOpen(false);

  };

  return (
    <div style={{ width: '100%' }}>
      <Grid sx={{ alignItems: 'center', height: '50px', display: 'flex' }}>
        <FormControl variant="outlined" size="small" sx={{ bgcolor: 'white', width: '30%' }}>
          <InputLabel sx={{ color: 'black' }}>All</InputLabel>
          <Select
            fullWidth
            sx={{ color: "black", width: '100%' }}
            label="Sort"
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <MenuItem value="All"> All  </MenuItem>
            <MenuItem value="Title"> Titles  </MenuItem>
            <MenuItem value="TV Episodes">TV Episodes  </MenuItem>
            <MenuItem value="Celebs"> Celebs   </MenuItem>
            <MenuItem value="Companies"> Companies </MenuItem>
            <MenuItem value="Keywords"> Keywords </MenuItem>
            <MenuItem value="Advanced Search"> Advanced Search </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="outlined" size="small" sx={{ borderColor: 'white', bgcolor: 'white' }}>
          <InputLabel htmlFor="searchBy">Search by {searchType}</InputLabel>
          <OutlinedInput
            id="searchBy "
            label="Search by "
            sx={{ color: 'black' }}
            autoFocus
            onChange={onQueryChange}
            value={query}
            ref={anchorRef}

            endAdornment={
              loading ? (
                <Loop sx={{ position: 'absolute', right: '26px', animation: 'spin 1s linear infinite' }} />
              ) : query ? (
                <button className="clear-icon" onClick={handleClear}>
                  <Clear />
                </button>
              ) : (
                <Search />
              )
            }

          />


        </FormControl>
        <Popper
          anchorEl={anchorRef.current}
          open={open}
          transition
          placement="bottom-start">
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                sx={{
                  border: 1,
                  p: 1,
                  bgcolor: "#263238",
                  marginTop: "8px",
                  color: "#999",
                  width: "100%",
                }}>
                <SearchLayout searchList={searchList} />
              </Box>
            </Fade>
          )}
        </Popper>
      </Grid>

    </div>

  );
}