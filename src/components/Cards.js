import React from "react";
import Card from "react-bootstrap/Card";
import Text from "../components/Text";
import MainLayOut from "../Layout/MainLayOut";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";

// Data for the card and object sections
const objdata = [
  { name: "Business Strategy", discription: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
  { name: "Website Development", discription: "Exploring the world of web development with various technologies." },
  { name: "Marketing Reporting", discription: "Comprehensive analysis and reporting for marketing campaigns." },
  { name: "Mobile Developments", discription: "Building responsive and user-friendly mobile applications." },
  { name: "Business Strategy", discription: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
  { name: "Marketing Reporting", discription: "A deep dive into campaign results and actionable insights." },
];

const cardData = [
  { img: portfolio1, skil: "Development", discription: "Getting tickets to the big show" },
  { img: portfolio2, skil: "Development", discription: "Building robust websites with React" },
  { img: portfolio3, skil: "Development", discription: "Designing modern and responsive interfaces" },
  { img: portfolio4, skil: "Development", discription: "Creating engaging user experiences" },
  { img: portfolio2, skil: "Development", discription: "Working with dynamic content and APIs" },
  { img: portfolio1, skil: "Development", discription: "Full-stack web development expertise" },
];

export function CardItems() {
  return (
    <>
      {cardData.map((Carditems, index) => (
        <div
          key={index} 
          className="col-12 col-md-6 col-lg-4 py-2 py-lg-3 my-2 minheight"
          style={{ background: `url(${Carditems.img}) no-repeat` }}
        >
          <div className="p-5">
            <MainLayOut>
              <div>
                <Text text={Carditems.skil} />
                <Text style="fs-4 lh-base fw-bold" text={Carditems.discription} />
              </div>
            </MainLayOut>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Cards() {
  return (
    <>
      {objdata.map((items, index) => (
        <MainLayOut key={index} style="col-12 col-md-6 col-lg-4 py-2 py-lg-3">
          <Card className="bg-dark text-white p-3 p-lg-5 hoverpink">
            <Card.Body>
              <Card.Title>
                <Text style="fs-3" text={items.name} />
              </Card.Title>
              <Text text={items.discription} />
            </Card.Body>
          </Card>
        </MainLayOut>
      ))}
    </>
  );
}
