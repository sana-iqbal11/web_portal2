import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import contract from "/public/contract.png";
import Image, { StaticImageData } from "next/image";
import doc from "/public/doc.png";
import { useTranslations } from "next-intl";

interface CardData {
  id: number;
  title: string;
  description: string;
  imgsrc: StaticImageData;
  width: number;
}

interface CardsAlkoodProps {
  selectedCards: number[];
  handleCardClick: (index: number) => void;
}

const CardsDairy: React.FC<CardsAlkoodProps> = ({
  selectedCards,
  handleCardClick,
}) => {
  const t = useTranslations("CardsDairy");

  const cardsData: CardData[] = [
    {
      id: 5,
      title: "answernotes",
      description: "answernotesdesc",
      imgsrc: contract,
      width: 100,
    },
    {
      id: 6,
      title: "intersecpt",
      description: "intersecptdesc",
      imgsrc: doc,
      width: 100,
    },
    {
      id: 7,
      title: "suitnews",
      description: "suitnewsdesc",
      imgsrc: doc,
      width: 100,
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardsData.map((card, index) => (
        <Grid key={card.id} item xs={12} sm={12} xl={3} lg={3.3} md={4}>
          <Card
            className={`border ${
              selectedCards.includes(card.id)
                ? "border-[#DDB669]"
                : "border-[#BCBDBF]"
            } rounded-[16px] h-56`}
            onClick={() => handleCardClick(card.id)}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px 2px",
                position: "relative",
              }}
            >
              {selectedCards.includes(card.id) && (
                <FaCheck
                  style={{
                    color: "#DDB669",
                    position: "absolute",
                    right: "5px",
                    top: "5px",
                    width: "50px",
                  }}
                />
              )}
              <Image src={card.imgsrc} alt="card" style={{ width: "65px" }} />
              <Typography
                className={`signin-form mr-3 mt-3 mb-2 text-sm`}
                style={{
                  color: selectedCards.includes(card.id)
                    ? "#DDB669"
                    : "#454646",
                }}
              >
                {t(card.title)}
              </Typography>
              <Typography className="checkbox-signin mx-2 text-justify mb-3 text-sm text-[#808283]">
                {t(card.description)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default CardsDairy;
