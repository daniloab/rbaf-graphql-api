import Team from '../../models/team'
import Player from '../../models/player'

export default {
    teams: async () => {
        console.log('teams')
        const teams = await Team.find({})
        return teams
    },
    players: async () => {
        console.log('players')
        const players = await Player.find({})
        return players
    },
    createTeam: async args => {
        const team = new Team({
            name: args.teamInput.name,
            img: args.teamInput.img
        })
        const newTeam = await team.save()
        return newTeam
    },
    createPlayer: async args => {
        try {
            let player = new Player({
                name: args.playerInput.name
            })

            const newPlayer = await player.save()
            return newPlayer
        } catch (error) {
            
        }
    }
}