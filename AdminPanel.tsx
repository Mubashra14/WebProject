import { useEffect, useState } from 'react';
import react from 'react';
interface TableRow {
  [key: string]: string | number;
}

interface AdminData {
  volunteer: TableRow[];
  donations: TableRow[];
  donationTotal: number;
  partners: TableRow[];
  newsletter: TableRow[];
}

const AdminPanel: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<AdminData | null>(null);
  const [error, setError] = useState('');

  const fetchData = () => {
    fetch('http://localhost/umeed-network/admin_api.php?action=fetch', {
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 403) {
          setLoggedIn(false);
          return;
        }
        return res.json();
      })
      .then(data => {
        if (data) {
          setData(data);
          setLoggedIn(true);
        }
      })
      .catch(err => {
        console.error("Fetch error", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    fetch('http://localhost/umeed-network/admin_api.php?action=login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        if (!res.ok) {
          setError('Invalid credentials');
        } else {
          setError('');
          fetchData();
        }
      });
  };

  const handleLogout = () => {
    fetch('http://localhost/umeed-network/admin_api.php?action=logout', {
      method: 'GET',
      credentials: 'include'
    }).then(() => {
  setLoggedIn(false);
  setData(null);
  alert("Logged out successfully!");
  // Optional: redirect
   window.location.href = '/#home';
})
    .catch(err => console.error("Logout error:",err));
  };

  if (!loggedIn) {
    return (
      <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10 p-4 border rounded shadow">
        <h2 className="text-2xl mb-4 font-semibold">Admin Login</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <input name="email" placeholder="Email" className="block w-full p-2 border mb-2" required />
        <input name="password" type="password" placeholder="Password" className="block w-full p-2 border mb-4" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    );
  }

  const renderTable = (title: string, rows: TableRow[]) => (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <table className="w-full table-auto border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            {rows[0] && Object.keys(rows[0]).map((col, i) => (
              <th key={i} className="border px-4 py-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, i) => (
                <td key={i} className="border px-4 py-2">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
      </div>
      {data && (
        <>
          {renderTable('Volunteers', data.volunteer)}
          {renderTable('Donations', data.donations)}
          <div className="text-lg font-semibold mb-6">Total Donations: Rs {data.donationTotal}</div>
          {renderTable('Partners', data.partners)}
          {renderTable('Newsletter Subscriptions', data.newsletter)}
        </>
      )}
    </div>
  );
  
};

export default AdminPanel;