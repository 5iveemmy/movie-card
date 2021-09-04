import React from "react";
import "./Cards.css";
import fast from "../images/fast.jpeg";
import banker from "../images/banker.jpeg";
import django from "../images/django.jpeg";
import gem from "../images/gem.jpeg";
import hitman from "../images/hitman.jpg";
import it from "../images/it.jpeg";
import man from "../images/man.jpg";
import skywalker from "../images/skywalker.jpeg";
import smith from "../images/smith.jpg";
import spiderVerse from "../images/spiderVerse.jpeg";
import suicidesquad from "../images/suicidesquad.jpg";
import widow from "../images/widow.jpeg";
import wonder from "../images/wonder.jpg";
import worldWar from "../images/worldWar.jpg";
import xmen from "../images/x-men.jpg";

import Card from "./Card";
function Cards() {
  return (
    <div className="cards">
      <div className="cards-wrapper">
        <Card src={fast} title="Fast and furious" year="(2017)" />
        <Card src={banker} title="Banker" year="(2019)" />
        <Card src={django} title="Django Unchained" year="(2019)" />
        <Card src={gem} title="Uncut Gems" year="(2019)" />
        <Card src={hitman} title="The hitman Bodyguard" year="(2019)" />
        <Card src={it} title="IT" year="(2019)" />
        <Card src={man} title="Think like a man" year="(2019)" />
        <Card src={skywalker} title="Star wars: The skywalker" year="(2019)" />
        <Card src={smith} title="Mr and Mrs smith" year="(2019)" />
        <Card
          src={spiderVerse}
          title="Spider-man: Into the spider verse"
          year="(2019)"
        />
        <Card src={suicidesquad} title="Suicide squad" year="(2019)" />
        <Card src={widow} title="Black-wido" year="(2019)" />
        <Card src={wonder} title="Wonder-woman" year="(2019)" />
        <Card src={worldWar} title="World war z" year="(2019)" />
        <Card src={xmen} title="x-men" year="(2019)" />
      </div>
    </div>
  );
}

export default Cards;
