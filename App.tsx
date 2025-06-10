import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Causes from './components/Causes';
import Impact from './components/Impact';
import Partners from './components/Partners';
import Volunteer from './components/Volunteer';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import DonationForm from './components/DonationForm';
import AllCauses from './components/AllCauses';
import ImpactDashboard from './components/ImpactDashboard';
import { ThemeProvider } from './context/ThemeContext';

import AdminPanel from './components/AdminPanel'; // <-- Import AdminPanel here

import { userApi } from './lib/api'; // import your API helper

function UsersList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userApi.getAll()
      .then(setUsers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="p-4 border rounded-md my-6">
      <h2 className="text-xl font-semibold mb-4">Users List (from backend)</h2>
      <ul className="list-disc list-inside">
        {users.map(user => (
          <li key={user.id}>
            {user.full_name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="font-[Inter] bg-background text-foreground">
          <Toaster position="top-right" />
          <Header />
          <Routes>
            <Route path="/donate" element={<DonationForm />} />
            <Route path="/all-causes" element={<AllCauses />} />
            <Route path="/impact-dashboard" element={<ImpactDashboard />} />
            
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  {/*<UsersList />*/} {/* keep or uncomment as needed */}
                  <About />
                  <Causes />
                  <Impact />
                  <Partners />
                  <Volunteer />
                  <Testimonials />
                  <NewsletterSignup />
                </>
              }
            />
          </Routes>
          <Footer />
          <div className="min-h-screen bg-gray-100 p-4">
             <AdminPanel/>
          </div>
        </div>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
