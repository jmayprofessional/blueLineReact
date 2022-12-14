const { gql } = require("apollo-server")

exports.typeDefs = gql`
#what in our data do we want to define
#how our data is going to look
type Query {
    #all the things we're able to fetch here
    #this property below is known as a Scalar Type
    #the string, int, float, bool, is considered Scalar type
    #graphQL can return two types: scalar and object types
    hello: String
    numberOfAnimals: Int
    price: Float
    inStock: Boolean
    getTeams: Team[]
}

type Teams {
    id: ID!
    name: String!
    venue: Venue
    division: Division
    conference: Conference
}

type Venue {
    name: String
    city: String
}

type Division {
    name: String
}

type Conference {
    name: String
}`