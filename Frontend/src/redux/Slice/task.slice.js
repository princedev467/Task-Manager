import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstance } from "../../utility/Axios_interceptor";

const initialState = {
    tasks: [],
    isLoading: false,
    error: null,
};

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosinstance.get('tasks');

            if (response.data.success) {
                return response.data.data;
            }

            return rejectWithValue('Failed to fetch tasks');
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to fetch tasks';
            return rejectWithValue(message);
        }
    }
);

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (taskData, { rejectWithValue }) => {
        try {
            const response = await axiosinstance.post('tasks', taskData);

            if (response.data.success) {
                return response.data.data;
            }

            return rejectWithValue('Failed to create task');
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to create task';
            return rejectWithValue(message);
        }
    }
);

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({ taskId, taskData }, { rejectWithValue }) => {
        try {
            const response = await axiosinstance.put(`tasks/${taskId}`, taskData);

            if (response.data.success) {
                return response.data.data;
            }

            return rejectWithValue('Failed to update task');
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to update task';
            return rejectWithValue(message);
        }
    }
);


export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, { rejectWithValue }) => {
        try {
            const response = await axiosinstance.delete(`tasks/${taskId}`);

            if (response.data.success) {
                return taskId; 
            }

            return rejectWithValue('Failed to delete task');
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to delete task';
            return rejectWithValue(message);
        }
    }
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        clearTaskError: (state) => {
            state.error = null;
        },
        clearTasks: (state) => {
            state.tasks = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload;
                state.error = null;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(createTask.pending, (state) => {
                state.error = null;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.tasks.unshift(action.payload);
            })
            .addCase(createTask.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(updateTask.pending, (state) => {
                state.error = null;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(
                    (task) => task._id === action.payload._id
                );
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(deleteTask.pending, (state) => {
                state.error = null;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(
                    (task) => task._id !== action.payload
                );
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { clearTaskError, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;
