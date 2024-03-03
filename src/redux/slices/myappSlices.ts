import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMyService } from '../../services';

interface STATE {
    loading: boolean;
    data: {
        type: string;
        data: any;
    };
}

export const myappInitialState: STATE = {
    loading: false,
    data: {
        type: "N/A",
        data: null,
    }
};

const getData = createAsyncThunk('myapp/data', async () => {
    const data: any = await getMyService();
    console.log(data);
    return data;
});


const { actions, reducer } = createSlice({
    name: 'myapp',
    initialState: myappInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state, action) => {
                // state.data = myappInitialState.data;
                state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
    }
});

export const myappActions = {
    ...actions,
    getData,
};

export const myappReducer = reducer;