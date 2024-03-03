import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

const user = (state: RootState) => state.user;

const defaultData = {
    id: null,
    name: "No user",
    email: "N/A",
    data: null,
};

export const selectUserLoading = createSelector(user, (state) => state.loading);

export const selectUser = createSelector(user, (state) => state.data ?? defaultData);