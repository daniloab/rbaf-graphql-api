import DataLoader from 'dataloader'
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { Types } from 'mongoose';
import { ConnectionArguments } from 'graphql-relay';

import PlayerModel from './PlayerModel'

export const getLoader = () => new DataLoader(ids => mongooseLoader(PlayerModel, ids))

const viewerCanSee = () => true;

export const load = async (context, id) => {
    if (!id) {
        return null;
    }

    let data;
    try {
        data = await context.dataloaders.PlayerLoader.load(id)
    } catch (err) {
        return null;
    }

    return viewerCanSee() ? new PlayerModel(data, context) : null;
}

export const clearCache = ({ dataloaders }, id) => dataloaders.PlayerLoader.clear(id.toString())
export const primeCache = ({ dataloaders }, id, data) => dataloaders.PlayerLoader.prime(id.toString(), data)
export const clearAndPrimeCache = (context, id, data) => clearCache(context, id) && primeCache(context, id, data)

export const loadPlayers = async (context, args) => {
    try {
        const where = args.status ? { status: args.status } : {}
        const players = PlayerModel.find(where)

        return connectionFromMongoCursor({
            cursor: players,
            context,
            args,
            loader: load
        })
    } catch (error) {
        console.log('error', error)
    }
}