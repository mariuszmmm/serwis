import { ServicesContainer, ServicesSection, ServicesTitle } from "./stylde";
import { serwis } from "../../utils/serwis";
import { ServiceItem } from "./ServiceItem";

export const Services = () => {
  return (
    <ServicesSection>
      <ServicesContainer>
        <ServicesTitle>Nasze Usługi</ServicesTitle>
        {serwis.services.map((service) => (
          <ServiceItem service={service} key={service.name} />
        ))}
      </ServicesContainer>
    </ServicesSection>
  );
};
