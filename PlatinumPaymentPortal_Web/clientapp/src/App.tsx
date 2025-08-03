import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import DashboardPage from "./Pages/Dashboard";
import DocumentUploadPage from "./Pages/DocumentUpload";
import InvoiceCapturePage from "./Pages/InvoiceCapture";
import InvoiceListPage from "./Pages/Invoices";
import {LoginPage} from "./Pages/Login";
import Layout from "./Components/Layout";
import {RelayEnvironmentProvider} from "react-relay";
import {RelayEnvironment} from "./RelayEnvitonment";
import RequireAuth from "./Context/__generated__/RequireAuth";
import {AuthContextController} from "./Context/AuthContext";
import {SignatureManager} from "./Pages/SignaturePage";

const App = () => (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
        <BrowserRouter>
            <AuthContextController>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <Layout/>
                            </RequireAuth>
                        }
                    >
                        <Route index element={<DashboardPage/>}/>
                        <Route path="invoices/new" element={<InvoiceCapturePage/>}/>
                        <Route
                            path="invoices/edit/:paymentId"
                            element={<InvoiceCapturePage/>}
                        />
                        <Route path="invoices/upload" element={<DocumentUploadPage/>}/>
                        <Route path="invoices" element={<InvoiceListPage/>}/>
                        <Route path="signature" element={<SignatureManager/>}/>
                    </Route>
                </Routes>
            </AuthContextController>
        </BrowserRouter>
    </RelayEnvironmentProvider>
);

export default App;
