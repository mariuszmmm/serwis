import {
  ContactContainer,
  ContactInfo,
  ContactSection,
  ContactText,
  ContactTitle,
  // Iframe,
  Image,
  ImageContainer,
  MailLink,
  PhoneLink,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { useEffect, useState } from "react";
import map from "../../assets/images/mapa.png";
import { HelmetForContact } from "./HelmetForContact";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <ContactSection $show={show}>
      <HelmetForContact />
      <ContactContainer>
        <ContactTitle>Kontakt</ContactTitle>
        <ContactForm />
        <ContactInfo>
          <ContactText>
            <span>Serwis RTV i AGD</span>
          </ContactText>
          <ContactText>ul. Generała Józefa Sowińskiego 2</ContactText>
          <ContactText>37-700 Przemyśl</ContactText>
          <br />
          <ContactText>
            <span>telefon:</span>{" "}
            <PhoneLink href={`tel:${serwis.phone}`}>{serwis.phone}</PhoneLink>
          </ContactText>
          <ContactText>
            <span>e-mail:</span>{" "}
            <MailLink href={`mailto:${serwis.email}}`}>{serwis.email}</MailLink>
          </ContactText>
          <br />
          <ContactText>Zapraszamy od poniedziałku do piątku</ContactText>
          <ContactText>
            w godzinach <span>9.30-17.00</span>
          </ContactText>
          {/* <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5152.333915350569!2d22.771064331707773!3d49.78292515912198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7f241be960ad%3A0xfc3cd55238f8f8a6!2sNaprawa%20pralek%20i%20sprz%C4%99tu%20RTV%20-%20naprawa%20ekspres%C3%B3w%20do%20kawy%2C%20naprawa%20telewizor%C3%B3w%2C%20naprawa%20zmywarki%2C%20serwis%20agd%2C!5e0!3m2!1spl!2spl!4v1719589983858!5m2!1spl!2spl"
            alt="mapa"
            loading="lazy"
          ></Iframe> */}
          <ImageContainer>
            <a href={serwis.url.mapaGoogle} target="_blank" rel="noreferrer">
              <Image src={map} alt="mapa" />
            </a>
          </ImageContainer>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};
