import {
  ServiceIcon,
  ServiceItemWrapper,
  ServiceText,
  ServiceTitle,
} from "./styled";

export const ServiceItem = ({ service }) => {
  const { icon, name, description } = service;
  return (
    <ServiceItemWrapper>
      <ServiceIcon src={icon || ""} alt={name} />
      <ServiceTitle>{name}</ServiceTitle>
      <ServiceText>{description}</ServiceText>
    </ServiceItemWrapper>
  );
};
