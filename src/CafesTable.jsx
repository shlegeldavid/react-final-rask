import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterCafes from './FilterCafes';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [subway, setSubway] = useState('All');

  useEffect(() => {
    // Получаем данные. Структура в файле: { cafes: [...] }
    axios.get('/cafes')
      .then((response) => {
        // Берем именно массив cafes из ответа
        setCafes(response.data.cafes);
      })
      .catch((err) => {
        console.error('Не удалось загрузить кафе:', err);
      });
  }, []);

  // Фильтруем. Если выбрано "All", показываем всё.
  const filteredCafes = subway === 'All' 
    ? cafes 
    : cafes.filter(cafe => cafe.subwayCode === subway);

  return (
    <div className="cafesTable">
      <FilterCafes setSubway={setSubway} />
      
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
          <li className="card" key={cafe.id}>
            {/* Если картинки нет (пустая строка в cafes.js), ставим заглушку */}
            <img 
              src={cafe.img && cafe.img.length > 0 ? cafe.img : "https://via.placeholder.com/150"} 
              alt={cafe.name} 
            />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;