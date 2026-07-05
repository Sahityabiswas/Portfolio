import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, background: '#020202', color: '#fff', fontFamily: 'monospace', minHeight: '100vh' }}>
          <h1 style={{ color: '#ef4444' }}>Application Error</h1>
          <pre style={{ color: '#fbbf24', marginTop: 20, whiteSpace: 'pre-wrap' }}>
            {this.state.error.toString()}
          </pre>
          <pre style={{ color: '#9ca3af', marginTop: 10, fontSize: 12, whiteSpace: 'pre-wrap' }}>
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
