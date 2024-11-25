// src/App.tsx
import './App.css';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/Loading'; // Import the Loading component
import router from './routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
