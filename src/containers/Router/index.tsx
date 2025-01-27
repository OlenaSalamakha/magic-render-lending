import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../../layout';
import { Home, Gallery, NotFound } from '../../pages';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
