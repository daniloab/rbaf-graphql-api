import DataLoader from 'dataloader'
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { Types } from 'mongoose';
import { ConnectionArguments } from 'graphql-relay';

import UserModel from './UserModel'

export const getLoader = () => new DataLoader(ids => mongooseLoader(UserModel, ids))

const viewerCanSee = () => true;

export const load = async (context, id) => {
    if (!id) {
        return null;
    }

    let data;
    try {
        data = await context.dataloaders.UserLoader.load(id)
    } catch (err) {
        return null;
    }

    return viewerCanSee() ? new UserModel(data, context) : null;
}

export const clearCache = ({ dataloaders }, id) => dataloaders.UserLoader.clear(id.toString())
export const primeCache = ({ dataloaders }, id, data) => dataloaders.UserLoader.prime(id.toString(), data)
export const clearAndPrimeCache = (context, id, data) => clearCache(context, id) && primeCache(context, id, data)

export const loadUsers = async (context, args) => {
    try {
        const users = UserModel.find({ team: context.user.team })

        return connectionFromMongoCursor({
            cursor: users,
            context,
            args,
            loader: load
        })
    } catch (error) {
        console.log('error', error)
    }
}