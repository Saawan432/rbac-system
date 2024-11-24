import React from 'react';
import error from "../assets/errorBoundary.jpg"
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error: Error) {

    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }
  handleLogout = () => {
    // Clear local storage and reload the page
    localStorage.clear();
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {

      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              <img src={error} alt="Error" className="mx-auto mb-4" />
              Something went wrong
            </h2>
            <p className="mb-6 text-gray-700">{this.state.errorMessage}</p>
            <button
              onClick={this.handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300"
            >
              Logout & Reload
            </button>
          </div>
        </div>
      );
    }


    return this.props.children;
  }
}

export default ErrorBoundary;
