import { Clear, Label, Loop, Search } from "@mui/icons-material";
import { Box, Button, Divider, Fade, FormControl, Grid, InputLabel, Menu, MenuItem, OutlinedInput, Popper, Select, Stack, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SearchLayout from "components/layout/SearchLayout";
import { searchActions, selectSearchList } from "features/search/searchSlice";
import { useDebounce } from "hook/useDebounce";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
import { Navigate, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


export default function SearchDashBoard() {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false);
  const [searchType, setSearchType] = useState('all'); // Khởi tạo giá trị mặc định

  const [query, setQuery] = useState("");
  const [inputLabelVisible, setInputLabelVisible] = useState(false);


  const [loading, setLoading] = useState(false);
  const [onSearch, setOnSearch] = useState(false);


  const debouncedValue = useDebounce(query, 500);

  const anchorRef = useRef(null);

  const searchList = useAppSelector(selectSearchList)
  const handleSearchTypeChange = (event: string) => {
    // setSearchType(event.target.value);
    setSearchType(event);
    handleUserClose()
  };

  const onQueryChange = (e: any) => {
    const newQuery = e.target.value;
    setOpen(!!newQuery);
    setQuery(newQuery);
    setInputLabelVisible(false);
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
    setInputLabelVisible(true);
  };
  const handleCloseButNotDeleteQuery = () => {
    setOpen(false);
    setInputLabelVisible(true);

  };
  let navigate = useNavigate()
  const [anchorUserEl, setAnchorUserEl] = useState<null | HTMLElement>(null);
  const openUser = Boolean(anchorUserEl);
  const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorUserEl(event.currentTarget);
  };
  const handleUserClose = () => {
    setAnchorUserEl(null);
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'black' }} ref={anchorRef}>
      <Grid sx={{ alignItems: 'center', height: '50px', display: 'flex', bgcolor: "black" }}>
        {/* <FormControl variant="outlined" size="small" sx={{ bgcolor: 'white', width: '30%' }}>
          <InputLabel sx={{ color: 'blue' }}>Titles</InputLabel>
          <Select
            fullWidth
            sx={{ color: "blue", width: '100%' }}
            label="Sort"
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <MenuItem value="Title"> Titles  </MenuItem>
            <MenuItem value="Advanced Search" onClick={()=>navigate('/IMDbPro')}> Advanced Search </MenuItem>
          </Select>
        </FormControl> */}
        <Button fullWidth onClick={handleUserClick}
          sx={{
            bgcolor: 'white', color: 'black', borderRadius: '0',
            height: '100%', maxWidth: '90px', fontWeight: 'bold',
            display: 'flex', ':hover': {
              bgcolor: 'white',
              color: "black"
            },
          }}>
          {searchType}
          {openUser ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
        <Divider sx={{ height: '100%', border: '1px solid black' }}></Divider>
        <Menu
          id="basic-menu"
          anchorEl={anchorUserEl}
          open={openUser}
          onClose={handleUserClose}
        >
          {/* <MenuItem value="All" onClick={() => handleSearchTypeChange('All')}> All  </MenuItem> */}
          <MenuItem value="Title" onClick={() => handleSearchTypeChange('Title')}> Titles </MenuItem>
          <MenuItem value="Advanced Search" onClick={() => navigate('/IMDbPro')}> Advanced Search </MenuItem>

        </Menu>
        {/* <FormControl fullWidth variant="outlined" size="small" sx={{ borderColor: 'white', bgcolor: 'white', height: '100%' }}>
          <InputLabel sx={{ color: 'black' }}>Search by  <span style={{ color: 'blue' }}>{searchType}</span></InputLabel>
          <OutlinedInput
            id="searchBy " label="Search by " sx={{ color: 'black' }} autoFocus onChange={onQueryChange} value={query}
            ref={anchorRef}
            endAdornment={
              loading ? (
                <Loop sx={{ position: 'absolute', right: '26px', animation: 'spin 1s linear infinite' }} />
              ) : query ? (
                <button className="clear-icon" onClick={handleClear}>
                  <Clear />
                </button>
              ) : (
                <Search
                  onClick={handleClear}
                />
              )
            }

          />


        </FormControl> */}
        <TextField
          placeholder="Search IMDb "
          ref={anchorRef}
          value={query}
          sx={{
            width: "100%", color: 'black', bgcolor: 'white', height: '100%', borderRadius: '0',
            border: "none",
            "& fieldset": { border: 'transparent', height: '98%', bgcolor: 'transparent' },

          }}
          autoFocus
          onChange={onQueryChange}
        />
        <Stack sx={{
          bgcolor: 'white', height: '100%', color: 'black', alignContent: 'center', alignItems: 'center', justifyContent: 'center'
          , border: "1px solid transparent"
        }}>
          {
            loading ? (
              <Loop sx={{ position: 'absolute', right: '26px', animation: 'spin 1s linear infinite' }} />
            ) : query ? (
              <Clear onClick={handleClear} sx={{ height: '100%', bgcolor: 'white', color: 'red', }} />
            ) : (
              <Search sx={{ height: '100%' }}
                onClick={handleClear}
              />
            )
          }
        </Stack>


        <Popper
          anchorEl={anchorRef.current}
          open={open}
          transition
          placement="bottom-start"
          sx={{
            zIndex: 1,
            width: anchorRef.current?.['offsetWidth'],
            transition: "width 0s ease-in-out 1s",
          }}
        >

          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                onClick={handleCloseButNotDeleteQuery}
                sx={{
                  border: 1,
                  p: 1,
                  bgcolor: "#263238",
                  color: "#999",
                  width: "100%",
                  height: '100%'
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