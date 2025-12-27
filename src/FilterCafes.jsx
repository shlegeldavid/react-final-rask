import React from 'react';

const FilterCafes = ({ setSubway }) => {
  // Исправил коды станций согласно файлу cafes.js, а не просто по тексту задания
  const subways = [
    {
      name: "Арбатская",
      code: "Arbat",
    },
    {
      name: "Александровский сад",
      code: "Alexanders Garden",
    },
    {
      name: "Московская",
      code: "Moscow",
    },
    {
      name: "Парк Культуры",
      code: "Culture",
    },
    {
      name: "Театральная",
      code: "Theatr", // В cafes.js написано 'Theatr', исправляем опечатку задания
    },
  ];

  return (
    <div className="controls">
      <select name="subway" id="subway" onChange={(e) => setSubway(e.target.value)}>
        <option value="All">Все</option>
        {subways.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;