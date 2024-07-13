import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  /* max-width: 600px; */
  margin: 0 20px 80px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  font-size: clamp(0.7rem, 2.5vw, 1.2rem);
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
  height: 150px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px;
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }
`;
