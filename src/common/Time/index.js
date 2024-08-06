import { format } from "date-fns";
import { pl } from 'date-fns/locale';
import { FormattedDate } from "./styled";

export const Time = ({ time, api }) => {
  const date = new Date(time * (api ? 1 : 1000));
  const formattedDate = format(date, 'd MMMM yyyy', { locale: pl });

  return (
    <FormattedDate>
      {time ? formattedDate : ""}
    </FormattedDate>
  );
}