import "./style/Header.css";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.7),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export const SearchAppBar = () => {
  return (
    <Search className="header__search">
      <SearchIconWrapper>
        <SearchIcon className="header__search-icon" />
      </SearchIconWrapper>
      <StyledInputBase 
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        className="header__input"
      />
    </Search>
  );
}