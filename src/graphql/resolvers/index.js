import Team from '../../models/team'
import Player from '../../models/player'

export default {
    teams: async () => {
        const teams = await Team.find({})
        return teams
    },
    players: async () => {
        const players = await Player.find({})
        return players
    },
    createTeam: async (args) => {
        try {
            const team = new Team({
                name: args.name,
                img: args.img
            })
            const newTeam = await team.save()
            return newTeam            
        } catch (err) {
            
        }
    }
}