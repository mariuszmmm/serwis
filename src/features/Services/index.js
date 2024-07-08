import { Helmet } from "react-helmet";
import {
  ServiceItem,
  ServiceText,
  ServiceTitle,
  ServicesContainer,
  ServicesSection,
  ServicesTitle,
} from "./styled";

export const Services = () => {
  return (
    <ServicesSection>
      <Helmet>
        <title>Nasze usługi | Serwis RTV AGD w Przemyślu</title>
        <meta
          name="description"
          content="Oferujemy profesjonalną naprawę pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
        />
        <meta
          name="keywords"
          content="naprawa, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
        />
      </Helmet>

      <ServicesContainer>
        <ServicesTitle>Zakres usług</ServicesTitle>
        <ServiceItem>
          <ServiceTitle>Naprawa pralek</ServiceTitle>
          <ServiceText>
            Kompleksowe usługi naprawy pralek automatycznych wszystkich marek.
            Bez&nbsp;względu na&nbsp;to, czy&nbsp;Twoja pralka
            nie&nbsp;pobiera&nbsp;wody, wycieka, nie obraca bębna,
            czy&nbsp;wydaje dziwne dźwięki, jestem w stanie zdiagnozować
            i&nbsp;naprawić problem. Korzystam z nowoczesnych narzędzi
            diagnostycznych oraz oryginalnych części zamiennych,
            co&nbsp;zapewnia trwałość i&nbsp;niezawodność wykonanej naprawy.
            Moim celem jest przywrócenie pełnej funkcjonalności Twojej pralki
            w&nbsp;jak najkrótszym czasie.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Naprawa zmywarek</ServiceTitle>
          <ServiceText>
            Specjalistyczna naprawa zmywarek różnych marek, gwarantująca ich
            długotrwałe i&nbsp;efektywne działanie. Problemy takie jak brak
            podgrzewania wody, wycieki, problemy z&nbsp;pompą, czy problemy
            z&nbsp;suszeniem naczyń to tylko niektóre z usterek, które
            naprawiam. Oferuję szybkie i&nbsp;skuteczne usługi naprawcze,
            zapewniając, że&nbsp;Twoja zmywarka będzie działać jak nowa. Dzięki
            regularnym szkoleniom i&nbsp;aktualizacji wiedzy, jestem
            na&nbsp;bieżąco z&nbsp;najnowszymi technologiami i&nbsp;metodami
            napraw.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Naprawa ekspresów do kawy</ServiceTitle>
          <ServiceText>
            Profesjonalna naprawa ekspresów do&nbsp;kawy, niezależnie od marki
            i&nbsp;modelu. Czy Twój ekspres do kawy przestał działać, nie
            zaparza kawy jak&nbsp;wcześniej, wyświetla błędy, czy ma inne
            problemy? Jestem tutaj, aby pomóc. Specjalizuję się w&nbsp;naprawie
            zarówno domowych, jak i&nbsp;profesjonalnych ekspresów do kawy,
            oferując precyzyjną diagnostykę i szybkie naprawy. Moim celem jest,
            abyś mógł cieszyć się swoją ulubioną kawą bez żadnych przerw.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Naprawa telewizorów</ServiceTitle>
          <ServiceText>
            Fachowa naprawa telewizorów wszystkich typów i&nbsp;marek,
            od&nbsp;tradycyjnych po nowoczesne modele smart. Naprawiam
            różnorodne problemy, takie jak brak obrazu, brak dźwięku, problemy
            z&nbsp;zasilaniem, uszkodzone matryce i&nbsp;inne. Dzięki dostępowi
            do oryginalnych części zamiennych oraz nowoczesnemu sprzętowi
            diagnostycznemu, jestem w&nbsp;stanie szybko i&nbsp;skutecznie
            przywrócić pełną funkcjonalność Twojego telewizora. Gwarantuję
            precyzyjną i&nbsp;profesjonalną obsługę, abyś mógł cieszyć się
            ulubionymi programami bez zakłóceń.
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
