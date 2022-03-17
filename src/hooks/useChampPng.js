import React, { useEffect, useState } from 'react';
import league from '../api/league';

export default (champ) => {
  const [champPng, setChampPng] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchPng = async (champ) => {
    try {
      const response = await league.get(`img/champion/${champ}.png`);
      setChampPng(response.data);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  }

  return [searchPng, champPng, errorMessage];
}

