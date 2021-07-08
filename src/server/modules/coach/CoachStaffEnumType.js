import { GraphQLEnumType } from 'graphql'

const coachStaffEnumType = new GraphQLEnumType({
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

export default coachStaffEnumType