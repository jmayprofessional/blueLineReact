const axios = require('axios');

export async function getTeamStats() {
const response = await axios.get('https://statsapi.web.nhl.com/api/v1/teams/3')

return response.data;
}