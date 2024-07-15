import styled, { css } from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px 0 0;
  text-align: left;
  min-height: calc(100vh - 5vh);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
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
  text-align: center;
`;

export const ContactInfo = styled.div`
  margin-top: 30px;
`;

export const ContactText = styled.p`
  font-size: 1.2rem;
  margin: 10px 20px;

  span {
    font-weight: 600;
  }
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
 width: 100%;
 height: 100%;
`;

export const ImageContainer = styled.div`
  width: 600px;
  max-width: 90vw;
  aspect-ratio: 600/450;
  border: none;
  margin: 80px 20px;
`;

export const Image = styled.img`
  width: 100%;
`;
