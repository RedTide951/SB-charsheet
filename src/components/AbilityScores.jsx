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

  const [strMod, setStrMod] = useState(0);
  const [dexMod, setDexMod] = useState(0);
  const [agiMod, setAgiMod] = useState(0);
  const [conMod, setConMod] = useState(0);
  const [witMod, setWitMod] = useState(0);
  const [intMod, setIntMod] = useState(0);
  const [wilMod, setWilMod] = useState(0);
  const [chaMod, setChaMod] = useState(0);

  function handleStatChange(stat, value) {
    setCharStats({ ...charStats, [stat]: value });
  }

  function calculateModifier(stat) {
    return Math.floor((stat - 10) / 2);
  }

  useEffect(() => {
    setStrMod(calculateModifier(charStats.strength));
    setDexMod(calculateModifier(charStats.dexterity));
    setAgiMod(calculateModifier(charStats.agility));
    setConMod(calculateModifier(charStats.constitution));
    setWitMod(calculateModifier(charStats.wits));
    setIntMod(calculateModifier(charStats.intelligence));
    setWilMod(calculateModifier(charStats.willpower));
    setChaMod(calculateModifier(charStats.charisma));
  }, [charStats]);

  return (
    <div>
      Ability Scores
      <div className="grid grid-cols-8 gap-4 text-center">
        <div>STR</div>
        <div>DEX</div>
        <div>AGI</div>
        <div>CON</div>
        <div>WIT</div>
        <div>INT</div>
        <div>WP</div>
        <div>CHA</div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.strength}
            onChange={(e) => handleStatChange("strength", e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.dexterity}
            onChange={(e) => handleStatChange("dexterity", e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.agility}
            onChange={(e) => handleStatChange("agility", e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.constitution}
            onChange={(e) => handleStatChange("constitution", e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.wits}
            onChange={(e) => handleStatChange("wits", e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.intelligence}
            onChange={(e) => handleStatChange("intelligence", e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.willpower}
            onChange={(e) => handleStatChange("willpower", e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full max-w-xs rounded text-center"
            value={charStats.charisma}
            onChange={(e) => handleStatChange("charisma", e.target.value)}
          />
        </div>
        <div>
          <p>{strMod}</p>
        </div>
        <div>
          <p>{dexMod}</p>
        </div>
        <div>
          <p>{agiMod}</p>
        </div>
        <div>
          <p>{conMod}</p>
        </div>
        <div>
          <p>{witMod}</p>
        </div>
        <div>
          <p>{intMod}</p>
        </div>
        <div>
          <p>{wilMod}</p>
        </div>
        <div>
          <p>{chaMod}</p>
        </div>
      </div>
    </div>
  );
};

export default AbilityScores;
