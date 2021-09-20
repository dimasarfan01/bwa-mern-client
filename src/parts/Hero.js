import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import ImageHero from "assets/images/img-hero.jpg";
import Button from "elements/Button";
import React from "react";
import Fade from "react-reveal/Fade";
import { numberFormat } from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  const IconHero = (props) => {
    const { imageSrc, alt, data, name, hasMarginRight } = props;
    return (
      <div className="col-auto" style={hasMarginRight && { marginRight: 35 }}>
        <img src={imageSrc} alt={alt} width="36" height="36" />
        <h6 className="mt-3">
          {data} <span className="text-gray-500 font-weigth-light">{name}</span>
        </h6>
      </div>
    );
  };

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <IconHero
                imageSrc={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
                data={numberFormat(props.data.travelers)}
                name="Travelers"
                hasMarginRight
              />
              <IconHero
                imageSrc={IconTreasure}
                alt={`${props.data.treasures} treasures`}
                data={numberFormat(props.data.treasures)}
                name="treasures"
                hasMarginRight
              />
              <IconHero
                imageSrc={IconCities}
                alt={`${props.data.cities} cities`}
                data={numberFormat(props.data.cities)}
                name="cities"
              />
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with Couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with Couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
