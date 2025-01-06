import { defineData } from '@aws-amplify/backend';

export const data = defineData({
  schema: `
    type Player @model @auth(rules: [{ allow: owner }]) {
      id: ID!
      email: String!
      nickname: String
      highScore: Int!
      gamesPlayed: Int!
      gameHistory: [Game] @hasMany
    }

    type Game @model @auth(rules: [{ allow: owner }]) {
      id: ID!
      score: Int!
      moves: Int!
      timeElapsed: Int!
      completed: Boolean!
      playerId: ID!
      player: Player! @belongsTo
    }
  `,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool'
  }
});
