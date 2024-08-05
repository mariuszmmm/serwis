import { format } from "date-fns";
import { pl } from 'date-fns/locale';
import { FormattedDate } from "./styled";

export const Time = ({ time }) => {
  const date = new Date(time * 1000);
  const formattedDate = format(date, 'd MMMM yyyy', { locale: pl });

  return (
    <FormattedDate>
      {formattedDate}
    </FormattedDate>
  );
}