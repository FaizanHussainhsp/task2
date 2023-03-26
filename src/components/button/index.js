import styled from "styled-components";
export const AddButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-block;
  font-weight: 400;
  background-color: transparent;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  border: 1px solid #6c757d;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 50rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-transform: none;
  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
`;

export const SaveButton = styled.button`
  cursor: pointer;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #5cdd8b;
  border-color: #5cdd8b;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 50rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0;
  font-family: inherit;
`;
