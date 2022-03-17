import React, { useEffect, useState } from 'react';
import league from '../api/league';

export default (champ) => {
  const [champInfo, setChampInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchInfo = async (champ) => {
    try {
      const response = await league.get(`data/en_US/champion/${champ}.json`);
      setChampInfo(response.data.data);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  }

  return [searchInfo, champInfo, errorMessage];
}

