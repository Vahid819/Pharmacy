import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </div>
  )
}

export default Search
