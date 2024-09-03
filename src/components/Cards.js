import React from "react";
import Card from "react-bootstrap/Card";
import Text from "../components/Text";
import MainLayOut from "../Layout/MainLayOut";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";

export let objdata = [
  {
    name: "Business Stratagy",
    discription:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    name: "Website Development",
    discription:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    name: "Markting Reporting",
    discription:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    name: "Mobile  Developments",
    discription:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    name: "Business Stratagy",
    discription:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    name: "Markting Reporting",
    discription:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];
export const cardData = [
  {
    img: portfolio1,
    skil: "Devlopment",
    discription: "geting tickts to the big show",
  },
  {
    img: portfolio2,
    skil: "Devlopment",
    discription: "geting tickts to the big show",
  },
  {
    img: portfolio3,
    skil: "Devlopment",
    discription: "geting tickts to the big show",
  },
  {
    img: portfolio4,
    skil: "Devlopment",
    discription: "geting tickts to the big show",
  },
  {
    img: portfolio2,
    skil: "Devlopment",
    discription: "geting tickts to the big show",
  },
  {
    img: portfolio1,
    skil: "Devlopment",
    discription: "geting tickts to the big show",
  },
];
let CardDatas = cardData.map((Carditems) => (
  <div
    className="col-12 col-md-6 col-lg-4 py-2 py-lg-3 my-2 minheight"
    style={{ background: `url(${Carditems.img}) no-repeat` }}
  >
    <div className="p-5">
      <MainLayOut>
        <div>
          <div>
            <Text text={Carditems.skil} />
          </div>
          <Text style="fs-4 lh-base fw-bold" text={Carditems.discription} />
        </div>
      </MainLayOut>
    </div>
  </div>
));
let mapData = objdata.map((items) => (
  <MainLayOut style="col-12 col-md-6 col-lg-4 py-2 py-lg-3">
    <Card className="bg-dark text-white p-3 p-lg-5 hoverpink">
      <Card.Body>
        <Card.Title>
          <Text style="fs-3" text={items.name} />
        </Card.Title>
        <Text text={items.discription} />
      </Card.Body>
    </Card>
  </MainLayOut>
));
export function CardItems() {
  return CardDatas;
}

function Cards() {
  return mapData;
}
export default Cards;
