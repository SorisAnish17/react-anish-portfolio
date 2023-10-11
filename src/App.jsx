import './styles/main.scss';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from './routes/BaseRoutes';
import Preloader from './components/UIElements/Preloader/Preloader';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
        <Toaster position="top-center" reverseOrder={false} />
      </Router>
    </Suspense>
  );
};

export default App;
