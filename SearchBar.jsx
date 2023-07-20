import React from "react";


const SearchBar = ({
    values,
    isLoading,
    handleSubmit,
    onChange
}) => {
    return (
      <form onSubmit={handleSubmit}>
        <input 
           value={values}
           disabled={isLoading}
            onChange={onChange}
            placeholder="Search Recipes"  
            className="form-control" 
              />
        <input 
             // disabled={ isLoading || !values}
              type="submit" 
              className="btn"
              value="Search"/>
      </form>
    )
    };

export default SearchBar;