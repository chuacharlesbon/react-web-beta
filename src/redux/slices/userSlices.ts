import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginService } from '../../services';

interface LOGIN {
    email: string;
    password: string;
}

interface STATE {
    loading: boolean;
    data: {
        id?: string | null;
        name: string;
        email: string;
        data: any;
    };
}

export const usersInitialState: STATE = {
    loading: false,
    data: {
        id: null,
        name: "No user",
        email: "N/A",
        data: null,
    }
};

const login = createAsyncThunk('auth/login', async (body: LOGIN) => {
    const data: any = await loginService(body);
    console.log(data);
    return data;
});


const { actions, reducer } = createSlice({
    name: 'user',
    initialState: usersInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                // state.data = usersInitialState.data;
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
    }
});

export const usersActions = {
    ...actions,
    login,
};

export const usersReducer = reducer;