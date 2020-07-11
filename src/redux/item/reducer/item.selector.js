import {createSelector} from 'reselect';

const selectItem = state => state.item

export const selectItemSelector = createSelector(
    [selectItem],
    item => item.itemProduct
)


