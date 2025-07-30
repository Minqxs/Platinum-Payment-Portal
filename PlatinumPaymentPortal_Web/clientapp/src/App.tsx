import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./Pages/Dashboard";
import DocumentUploadPage from "./Pages/DocumentUpload";
import InvoiceCapturePage from "./Pages/InvoiceCapture";
import InvoiceListPage from "./Pages/Invoices";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="invoices/new" element={<InvoiceCapturePage />} />
        <Route path="invoices/upload" element={<DocumentUploadPage />} />
        <Route path="invoices" element={<InvoiceListPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
