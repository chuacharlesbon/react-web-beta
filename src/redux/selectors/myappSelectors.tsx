import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

const myapp = (state: RootState) => state.myapp;

const defaultData = {
    type: "N/A",
    data: null,
};

export const selectMyAppLoading = createSelector(myapp, (state) => state.loading);

export const selectMyApp = createSelector(myapp, (state) => state.data ?? defaultData);

export const selectMyAppType = createSelector(myapp, (state) => state.data.type ?? defaultData.type);