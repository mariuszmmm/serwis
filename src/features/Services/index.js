import { Helmet } from "react-helmet";
import {
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
      <Helmet>
        <title>Usługi - Naprawa RTV i AGD - Przemyśl</title>
        <meta
          name="description"
          content="Zapoznaj się z naszymi usługami naprawy RTV i AGD w Przemyślu."
        />
      </Helmet>
      <ServicesContainer>
        <ServicesTitle>Zakres usług</ServicesTitle>
        <ServiceItem>
          <ServiceTitle>Naprawa pralek</ServiceTitle>
          <ServiceText>
            Kompleksowe usługi naprawy pralek automatycznych wszystkich marek.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Naprawa ekspresów do&nbsp;kawy</ServiceTitle>
          <ServiceText>
            Profesjonalna naprawa ekspresów do&nbsp;kawy, niezależnie
            od&nbsp;marki i&nbsp;modelu.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Serwis i&nbsp;konserwacja</ServiceTitle>
          <ServiceText>
            Świadczę kompleksowe usługi serwisowe i&nbsp;konserwacyjne
            urządzeń&nbsp;AGD. Zapewniam szybką i&nbsp;skuteczną naprawę
            sprzętu, dbając o&nbsp;to, aby&nbsp;działał jak&nbsp;nowy. Regularna
            konserwacja przeprowadzana przez doświadczonego specjalistę pozwala
            na&nbsp;przedłużenie żywotności urządzeń i&nbsp;zapobieganie
            awariom.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Konsultacje i&nbsp;doradztwo</ServiceTitle>
          <ServiceText>
            Oferuję profesjonalne konsultacje i&nbsp;doradztwo w&nbsp;zakresie
            serwisu urządzeń&nbsp;AGD. Dzięki wieloletniemu doświadczeniu,
            pomagam zidentyfikować problemy z&nbsp;urządzeniami
            oraz&nbsp;doradzam najlepsze rozwiązania, aby&nbsp;zapewnić
            ich&nbsp;sprawne działanie. Gwarantuję rzetelną diagnozę
            oraz&nbsp;fachowe porady dotyczące napraw i&nbsp;konserwacji
            sprzętu.
          </ServiceText>
        </ServiceItem>
      </ServicesContainer>
    </ServicesSection>
  );
};
