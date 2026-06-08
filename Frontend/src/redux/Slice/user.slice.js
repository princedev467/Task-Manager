import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstance } from "../../utility/Axios_interceptor";

const initialState = {
    isLoading: false,
    user: null,
    error: null,
};

// Register thunk
export const Register = createAsyncThunk(
    'user/Register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosinstance.post('auth/register', data);

            if (response.data.success) {
                // Store token in localStorage for persistence
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                return response.data.data;
            }

            return rejectWithValue('Registration failed');
        } catch (error) {
            const message = error.response?.data?.message || 'Registration failed';
            return rejectWithValue(message);
        }
    }
);

// Login thunk
export const Login = createAsyncThunk(
    'user/Login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosinstance.post('auth/login', data);

            if (response.data.success) {
                // Store token in localStorage for persistence
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                return response.data.data;
            }

            return rejectWithValue('Login failed');
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed';
            return rejectWithValue(message);
        }
    }
);

// Load user from localStorage on app startup
export const loadUser = createAsyncThunk(
    'user/loadUser',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');

            if (!token || !storedUser) {
                return rejectWithValue('No token found');
            }

            // Verify token is still valid by hitting /auth/me
            const response = await axiosinstance.get('auth/me');

            if (response.data.success) {
                // Return stored data (which includes the token) merged with fresh user data
                const userData = JSON.parse(storedUser);
                return { ...userData, ...response.data.data, token };
            }

            return rejectWithValue('Token expired');
        } catch (error) {
            // Token invalid — clear storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return rejectWithValue('Session expired');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.isLoading = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Register cases
        builder
            .addCase(Register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(Register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(Register.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.payload;
            })

            // Login cases
            .addCase(Login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(Login.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.payload;
            })

            // Load user cases
            .addCase(loadUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loadUser.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
            });
    },
});

export const { logout, clearError } = userSlice.actions;
export default userSlice.reducer;