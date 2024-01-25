import { Clear, Loop, Search } from "@mui/icons-material";
import { Box, Fade, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Popper, Select } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SearchLayout from "components/layout/SearchLayout";
import { searchActions, selectSearchList } from "features/search/searchSlice";
import { useDebounce } from "hook/useDebounce";
import { useEffect, useRef, useState } from 'react';

export default function SearchDashBoard() {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false);
  const [searchType, setSearchType] = useState('all'); // Khởi tạo giá trị mặc định

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(query, 500);

  const anchorRef = useRef(null);
  const searchList = useAppSelector(selectSearchList)
  const handleSearchTypeChange = (event: any) => {
    setSearchType(event.target.value);
  };

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

  const handleClear = () => {
    setQuery('')
    setOpen(false);
  };
  const handleCloseButNotDeleteQuery = () => {
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
              //  onClick={handleCloseButNotDeleteQuery}
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