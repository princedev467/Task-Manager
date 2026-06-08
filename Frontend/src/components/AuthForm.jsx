import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Login, Register, clearError } from '../redux/Slice/user.slice';
import { Mail, Lock, User, LogIn, UserPlus, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const AuthForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error: authError } = useSelector((state) => state.auth);

  const [isLogin, setIsLogin] = useState(true);
  const [localError, setLocalError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLocalError('');
    dispatch(clearError());
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setLocalError('');
    dispatch(clearError());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    dispatch(clearError());

    if (!email || !password) {
      setLocalError('Please fill in all required fields');
      return;
    }

    if (!isLogin) {
      if (!name) {
        setLocalError('Name is required for registration');
        return;
      }
      if (password.length < 6) {
        setLocalError('Password must be at least 6 characters');
        return;
      }
      if (password !== confirmPassword) {
        setLocalError('Passwords do not match');
        return;
      }
    }

    try {
      let result;
      if (isLogin) {
        result = await dispatch(Login({ email, password })).unwrap();
        toast.success(`Welcome back, ${result.name}!`);
      } else {
        result = await dispatch(Register({ name, email, password })).unwrap();
        toast.success(`Account created! Welcome, ${result.name}!`);
      }
    } catch (err) {
      setLocalError(err || 'Authentication failed');
      toast.error(err || 'Authentication failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <div className="logo-badge">✓</div>
          <h2>{isLogin ? 'Welcome Back' : 'Get Started'}</h2>
          <p>{isLogin ? 'Sign in to access your task dashboard' : 'Create an account to start tracking your tasks'}</p>
        </div>

        {(localError || authError) && (
          <div className="error-alert">
            <AlertCircle size={18} className="error-icon" />
            <span>{localError || authError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn-primary auth-submit" disabled={isLoading}>
            {isLoading ? (
              <span className="spinner"></span>
            ) : isLogin ? (
              <>
                <LogIn size={18} />
                <span>Sign In</span>
              </>
            ) : (
              <>
                <UserPlus size={18} />
                <span>Create Account</span>
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <span>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={handleToggle} className="btn-link">
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
