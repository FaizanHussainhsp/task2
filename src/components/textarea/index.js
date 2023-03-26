import styled from "styled-components";
export const TextArea = styled.textarea`
  min-height: 200px;
  border-radius: 19px;
  display: block;
  width: 95%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: vertical;
  margin: 0;
  font-family: inherit;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #aeeec5;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(92, 221, 139, 0.25);
  }
`;
