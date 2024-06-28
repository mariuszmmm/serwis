import {
  ServiceIcon,
  ServiceItem,
  ServiceText,
  ServiceTitle,
  ServicesContainer,
  ServicesSection,
  ServicesTitle,
} from "./stylde";

export const Services = () => {
  return (
    <ServicesSection>
      <ServicesContainer>
        <ServicesTitle>Nasze Usługi</ServicesTitle>
        <ServiceItem>
          <ServiceIcon src={"washingMachineIcon"} alt="Naprawa Pralek" />
          <ServiceTitle>Naprawa Pralek</ServiceTitle>
          <ServiceText>
            Oferujemy kompleksowe usługi naprawy pralek automatycznych
            wszystkich marek.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon
            src={"coffeeMachineIcon"}
            alt="Naprawa Ekspresów do Kawy"
          />
          <ServiceTitle>Naprawa Ekspresów do Kawy</ServiceTitle>
          <ServiceText>
            Profesjonalna naprawa ekspresów do kawy, niezależnie od marki i
            modelu.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src={"maintenanceIcon"} alt="Serwis i Konserwacja" />
          <ServiceTitle>Serwis i Konserwacja</ServiceTitle>
          <ServiceText>
            Zajmujemy się regularnym serwisowaniem i konserwacją urządzeń AGD.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src={"consultingIcon"} alt="Konsultacje i Doradztwo" />
          <ServiceTitle>Konsultacje i Doradztwo</ServiceTitle>
          <ServiceText>
            Oferujemy profesjonalne doradztwo w zakresie zakupu i użytkowania
            sprzętu AGD.
          </ServiceText>
        </ServiceItem>
      </ServicesContainer>
    </ServicesSection>
  );
};
