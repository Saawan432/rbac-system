
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import Toaster from './components/Toaster';

ReactDOM.render(
<ErrorBoundary>
<Toaster />
<App />
</ErrorBoundary>  
, document.getElementById('root'));
