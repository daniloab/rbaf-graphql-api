import DataLoader from 'dataloader'
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';

import CoachModel from './CoachModel'

export const getLoader = () => new DataLoader(ids => mongooseLoader(CoachModel, ids))

const viewerCanSee = () => true;

export const load = async (context, id) => {
    if (!id) {
        return null;
    }

    let data;
    try {
        data = await context.dataloaders.CoachLoader.load(id)
    } catch (err) {
        return null;
    }

    return viewerCanSee() ? new CoachModel(data, context) : null;
}

export const clearCache = ({ dataloaders }, id) => dataloaders.CoachLoader.clear(id.toString())
export const primeCache = ({ dataloaders }, id, data) => dataloaders.CoachLoader.prime(id.toString(), data)
export const clearAndPrimeCache = (context, id, data) => clearCache(context, id) && primeCache(context, id, data)

export const loadCoaches = async (context, args) => {
    try {
        const where = args.squad ? { status: args.squad } : {}
        const coaches = CoachModel.find(where)

        return connectionFromMongoCursor({
            cursor: coaches,
            context,
            args,
            loader: load
        })
    } catch (error) {
        console.log('error', error)
    }
}