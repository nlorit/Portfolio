import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import "../src/app/styles/App.css"

const Home = lazy(() => import('./app/components/Home/Home'));
const About = lazy(() => import('./app/components/About/About'));
const Projects = lazy(() => import('./app/components/Projects/Projects'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}

export default App;
