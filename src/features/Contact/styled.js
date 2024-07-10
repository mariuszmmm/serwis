import styled, { css } from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px 0 20px;
  text-align: center;
  min-height: calc(100vh - 5vh);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}
`;

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 10px;
`;

export const ContactTitle = styled.h1`
  margin-bottom: 40px;
  font-size: clamp(1.5rem, 3vw, 3rem);
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

export const ContactLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
  height: 150px;
`;

export const ContactButton = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }
`;

export const ContactInfo = styled.div`
  margin-top: 30px;
`;

export const ContactText = styled.p`
  font-size: 1.2rem;
  margin: 15px 20px;
`;

export const MailLink = styled.a`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
`;

export const PhoneLink = styled.a`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
`;

export const Iframe = styled.iframe`
  margin-top: 20px;
  width: 600px;
  height: 450px;
  border: none;
  max-width: 90vw;
  margin: 30px 15px;
`;
