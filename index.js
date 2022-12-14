const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query")


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
    },
});

server.listen().then(({ url}) => {
    console.log("Server is ready at " + url)
});


// team stats - https://statsapi.web.nhl.com/api/v1/teams/3
// active roster - https://statsapi.web.nhl.com/api/v1/teams/3/?expand=team.roster
// next game - https://statsapi.web.nhl.com/api/v1/teams/3/?expand=team.schedule.next
// last game - https://statsapi.web.nhl.com/api/v1/teams/3/?expand=team.schedule.previous
// team stats this season - https://statsapi.web.nhl.com/api/v1/teams/3/?expand=team.stats
// returns entire roster for team including id value, name, jersey number, and position https://statsapi.web.nhl.com/api/v1/teams/ID/roster
// returns an individual player - https://statsapi.web.nhl.com/api/v1/people/ID
// team regular season comparison - https://statsapi.web.nhl.com/api/v1/teams/3/?stats=regularSeasonStatRankings&season=20162017



