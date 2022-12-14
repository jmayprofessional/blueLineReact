const { getTeamStats } = require("../services/getTeams");

exports.Query = {
        hello: () => {
            return "World!"
        },
        numberOfAnimals: () => {
            return 55;
        },
        price: () => {
            return 3.5034343
        },
        inStock: () => {
            return true
        },
        getTeamStats: async () => {
            return await getTeamStats()
        },
        getTeamRosterStats: async () => {
            return await getTeamRosterStats()
        },
        getPlayerStats: async () => {
            return await getPlayerStats()
        },
        getNextGameStats: async () => {
            return await getNextGameStats()
        },
        getLastGameStats: async () => {
            return await getLastGameStats()
        },
        getCurrentSeasonStats: async () => {
            return await getCurrentSeasonStats()
        }
    }
