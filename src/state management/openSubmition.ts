import { createSlice } from "@reduxjs/toolkit";

interface openCloseSubmition {
    submit: boolean;
};

const initialState: openCloseSubmition= {
    submit: false,
};

const submitSlice = createSlice({
    name: "submitting",
    initialState,
    reducers: {
        onOffSubmit: (state) => {
            state.submit = !state.submit
        },
    },
})

export const { onOffSubmit } = submitSlice.actions
export default submitSlice.reducer
