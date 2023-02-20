import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Badge } from "reactstrap";

const CardIteam = () => {
  return (
    <Card>
      <img src="" width="200px" height="200px" style={{margin:'auto'}}/>
      <CardBody>
        <CardTitle>
          MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
        </CardTitle>
        <CardSubtitle>$18.50</CardSubtitle>
        <CardSubtitle className="text-danger">6d 13h 52 sec</CardSubtitle>
      <Badge className="bg-light text-black">5 bids</Badge>
      </CardBody>
    </Card>
  );
};

export default CardIteam;
