import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import BirthdayPage from './BirthdayPage';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/adelnarozeniny" element={<MainPage />} />
                    <Route path="/birthday-page" element={<BirthdayPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
