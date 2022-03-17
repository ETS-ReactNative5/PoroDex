import axios from 'axios';

export default axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/12.5.1/'
})

// get all champs /champion.json
// get specific champ details champion/Garen.json