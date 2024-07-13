import { Info, SendInfoWrapper } from "./styled";

export const SendInfo = ({ show, success }) => (
  <SendInfoWrapper $show={show}>
    <Info>
      {success ? "Wiadomośc została wysłana" : "Błąd podczas wysyłania"}
    </Info>
  </SendInfoWrapper>
);
