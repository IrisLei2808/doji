import {createSelector} from 'reselect';

const selectDirectory = state => state.directory // get directory from rootreducer

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections   // from root
)