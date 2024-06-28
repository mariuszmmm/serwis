import {
  ContactButton,
  ContactContainer,
  ContactForm,
  ContactInfo,
  ContactInput,
  ContactLabel,
  ContactSection,
  ContactText,
  ContactTextarea,
  ContactTitle,
  Container,
} from "./styled";

export const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactTitle>Kontakt</ContactTitle>
        <ContactForm>
          <ContactLabel>Imię</ContactLabel>
          <ContactInput type="text" placeholder="Twoje imię" required />
          <ContactLabel>Email</ContactLabel>
          <ContactInput type="email" placeholder="Twój email" required />
          <ContactLabel>Wiadomość</ContactLabel>
          <ContactTextarea
            placeholder="Twoja wiadomość"
            required
          ></ContactTextarea>
          <ContactButton type="submit">Wyślij</ContactButton>
        </ContactForm>
        <ContactInfo>
          <ContactText>Telefon: +48 123 456 789</ContactText>
          <ContactText>Email: kontakt@naprawaagd.pl</ContactText>
          {/* Do dodania mapa Google */}
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};
