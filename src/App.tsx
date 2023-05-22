import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAll = async () => {
    const res = await getAll();

    setGoods(res);
  };

  const handleFive = async () => {
    const res = await get5First();

    setGoods(res);
  };

  const handleColor = async () => {
    const res = await getRedGoods();

    setGoods(res);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={handleFive} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={handleColor} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
