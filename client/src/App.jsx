import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import AllImage from './components/AllImage';
import ImageDetails from './components/ImageDetails';
import AddImage from './components/AddImage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="images" element={<AllImage />} />
          <Route path="images/:id" element={<ImageDetails />} />
          <Route path="upload" element={<AddImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
