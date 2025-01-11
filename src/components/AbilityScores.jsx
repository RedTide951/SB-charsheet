import React, { useState, useEffect } from "react";

const AbilityScores = () => {
  const [charStats, setCharStats] = useState({
    strength: 0,
    dexterity: 0,
    agility: 0,
    constitution: 0,
    wits: 0,
    intelligence: 0,
    willpower: 0,
    charisma: 0,
  });

  const [modifiers, setModifiers] = useState({});

  function handleStatChange(stat, value) {
    setCharStats({ ...charStats, [stat]: parseInt(value) || 0 });
  }

  function calculateModifier(stat) {
    return Math.floor((stat - 10) / 2);
  }

  const handleRoll = (statName) => {
    const newRoll = Math.ceil(Math.random() * 20) + modifiers[statName];
    console.log(`Roll for ${statName.toUpperCase()}:`, newRoll);
  };

  useEffect(() => {
    const newModifiers = {};
    for (const [key, value] of Object.entries(charStats)) {
      newModifiers[key] = calculateModifier(value);
    }
    setModifiers(newModifiers);
  }, [charStats]);

  return (
    <div>
      <h2 className="text-2xl font-bold">Ability Scores</h2>
      <div className="grid grid-cols-8 gap-2 text-center">
        {Object.entries(charStats).map(([statName, value]) => (
          <React.Fragment key={statName}>
            <div className="flex flex-col gap-2">
              <div>{statName.toUpperCase().slice(0, 3)}</div>
              <input
                type="number"
                className="w-full max-w-xs rounded text-center"
                value={value}
                onChange={(e) => handleStatChange(statName, e.target.value)}
              />
              <button
                className="btn btn-sm"
                onClick={() => handleRoll(statName)}
              >
                {modifiers[statName] !== undefined ? modifiers[statName] : 0}
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AbilityScores;
