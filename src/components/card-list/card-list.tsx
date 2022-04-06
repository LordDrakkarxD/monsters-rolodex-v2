import { Monster } from "../../App";

import Card from "../card/card";
import { CardListContainer } from "./card-list.styles.jsx";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <CardListContainer>
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </CardListContainer>
);

export default CardList;
