import { createReducer } from "typesafe-actions";
import { fetchGemsAsync } from "../actions"

import { Gem } from "../../models"

export interface GemState {
    gems: Map<string, Gem>;
    loadingList: boolean;
}

export const initialGemState: GemState = {gems: new Map(), loadingList: false};

const assignAll = (gems: Gem[]) =>
    new Map(gems.map(gem => [gem.name, gem]))

export const gemReducer = createReducer(initialGemState)
    .handleAction(
        fetchGemsAsync.failure,
        (state: GemState) => ({...state, loadingList: false})
    )
    .handleAction(
        fetchGemsAsync.request,
        (state: GemState) => ({...state, loadingList: true})
    )
    .handleAction(
        fetchGemsAsync.success,
        (state: GemState, {payload}: {payload: Gem[]}) => ({ 
            ...state,
            gems: assignAll(payload),
            loadingList: false
        })
    );
