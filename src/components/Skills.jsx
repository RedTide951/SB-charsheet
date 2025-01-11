import React, { useState } from "react";

const Skills = () => {
  const [charSkills, setCharSkills] = useState({
    Appraise: 0,
    Athletics: 0,
    Bargain: 0,
    Blunt: 0,
    Bow: 0,
    Brawling: 0,
    Crossbow: 0,
    Diplomacy: 0,
    Disguise: 0,
    Dodge: 0,
    Endurance: 0,
    "Fire Arms": 0,
    Intimidate: 0,
    Language: 0,
    "Large Blade": 0,
    Lie: 0,
    Lore: 0,
    Magick: 0,
    Medicine: 0,
    Navigation: 0,
    Ostler: 0,
    Perception: 0,
    Persuade: 0,
    Pray: 0,
    Repair: 0,
    "Sleight of Hand": 0,
    "Small Blade": 0,
    Stealth: 0,
    Streetwise: 0,
    Survival: 0,
    Thrown: 0,
    "Two Handed": 0,
  });

  const handleRoll = (skillName) => {
    const newRoll = Math.ceil(Math.random() * 20) + charSkills[skillName];
    console.log(newRoll);
  };

  return (
    <div>
      <h2>Skills</h2>
      <div className="text-right text-sm flex flex-col gap-1">
        {Object.entries(charSkills).map(([skillName, value]) => (
          <div
            key={skillName}
            className="flex flex-row gap-2 justify-between items-center text-center"
          >
            <div className="flex-1 text-left overflow-hidden">{skillName}</div>
            <div className="flex-1">{value}</div>
            <button
              className="btn btn-sm text-sm px-6 flex-1"
              onClick={() => handleRoll(skillName)}
            >
              Roll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
