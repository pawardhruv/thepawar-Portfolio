import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './styles.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#050608',
          color: '#fff',
          padding: '40px',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          <h1 style={{fontSize:'28px', marginBottom:'12px'}}>Portfolio runtime error</h1>
          <p style={{color:'#aaa'}}>Open the browser Console and share the error if this message appears.</p>
          <pre style={{whiteSpace:'pre-wrap', color:'#ddd', marginTop:'24px'}}>{String(this.state.error?.stack || this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
