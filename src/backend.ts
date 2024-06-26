import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information
export async function allMaisonFavori() {
    const record = await pb.collection('maison').getFullList({filter: 'favori = true'});
    console.log(JSON.stringify(record, null, 2));
    return record
}