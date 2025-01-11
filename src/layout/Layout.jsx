import React from "react";
import AbilityScores from "../components/AbilityScores";
import Skills from "../components/Skills";
import NameComponent from "../components/NameComponent";
import CareerAndSpecies from "../components/CareerAndSpecies";

const Layout = () => {
  return (
    <main className="flex flex-col m-4 gap-4">
      <div id="details-container">
        <NameComponent />
      </div>
      <div id="career-and-species-container">
        <CareerAndSpecies />
      </div>
      <div id="ability-scores-container">
        <AbilityScores />
      </div>
      <div id="skills-container">
        <Skills />
      </div>
      <div id="talents-container"></div>

      <div id="portrait"></div>
      <div id="combat-container"></div>
      <div id="inventory-container"></div>
    </main>
  );
};

export default Layout;
