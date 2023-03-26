import React from "react";
import styled from "styled-components";

export const SearchInput = styled.input`
  display: block;
  //   width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 50rem;
  max-width: 15em;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #aeeec5;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(92, 221, 139, 0.25);
  }
`;

// const SearchInput = () => {
//   return <div>index</div>;
// };

// export default SearchInput;
