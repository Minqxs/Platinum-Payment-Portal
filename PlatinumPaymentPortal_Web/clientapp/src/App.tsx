import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./Pages/Dashboard";
import DocumentUploadPage from "./Pages/DocumentUpload";
import InvoiceCapturePage from "./Pages/InvoiceCapture";
import InvoiceListPage from "./Pages/Invoices";
import { LoginPage } from "./Pages/Login";
import Layout from "./Components/Layout";
import { AuthContextController } from "./Context/AuthContext";
import { RelayEnvironmentProvider } from "react-relay";
import relayEnvironment from "./Relay/environment";

const App = () => (
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <BrowserRouter>
      <AuthContextController>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="invoices/new" element={<InvoiceCapturePage />} />
            <Route
              path="invoices/edit/:paymentId"
              element={<InvoiceCapturePage />}
            />
            <Route path="invoices/upload" element={<DocumentUploadPage />} />
            <Route path="invoices" element={<InvoiceListPage />} />
          </Route>
        </Routes>
      </AuthContextController>
    </BrowserRouter>
  </RelayEnvironmentProvider>
);

export default App;
