import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { loadUser, logout } from './redux/Slice/user.slice';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import './App.css';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(loadUser());
    }

    const handleUnauthorized = () => {
      dispatch(logout());
    };

    window.addEventListener('unauthorized', handleUnauthorized);
    return () => {
      window.removeEventListener('unauthorized', handleUnauthorized);
    };
  }, [dispatch]);

  if (isLoading && !user) {
    return (
      <div className="app-loading">
        <div className="loading-brand">
          <div className="brand-logo-lg">✓</div>
          <h1>TaskFlow</h1>
          <div className="spinner-large"></div>
          <p>Loading your workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--glass-bg)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(12px)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      {!user && <ThemeToggle />}
      {user ? <Dashboard /> : <AuthForm />}
    </>
  );
}

export default App;
