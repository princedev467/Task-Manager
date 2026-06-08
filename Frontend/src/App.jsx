import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/Slice/user.slice';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  // On mount, try to restore user session from localStorage token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(loadUser());
    }
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
      <ThemeToggle />
      {user ? <Dashboard /> : <AuthForm />}
    </>
  );
}

export default App;
