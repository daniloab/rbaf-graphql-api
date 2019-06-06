import { GraphQLEnumType } from 'graphql'

export default new GraphQLEnumType({
    name: 'CoachStaffEnumType',
    values: {
        OFFENSE: {
            value: 0
        },
        DEFENSE: {
            value: 1
        },
        SPECIALTEAM: {
            value: 2
        }
    }
})