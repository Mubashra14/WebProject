const API_BASE_URL = 'http://localhost/umeed-network';

// General helper for API calls inside the /api/ folder
export async function makeApiRequest(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${errorText}`);
    }

    return response.json();
  } catch (err) {
    console.error('API call error:', err);
    throw err;
  }
}

// volunteerApi uses the standalone PHP file directly (not inside /api/)
export const volunteerApi = {
  apply: async (formData: any) => {
    const response = await fetch(`${API_BASE_URL}/apply_volunteer.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // Try to parse the error message from response JSON
      let errorMessage = 'Failed to submit volunteer application';
      try {
        const errorData = await response.json();
        if (errorData?.message) errorMessage = errorData.message;
      } catch {
        // ignore JSON parse errors
      }
      throw new Error(errorMessage);
    }

    return response.json();
  },

  getAll: () => makeApiRequest('/volunteers.php'), // if you have volunteers.php inside /api/
};

export const userApi = {
  getAll: () => makeApiRequest('/users.php'),
  create: (userData: any) =>
    makeApiRequest('/users.php', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  update: (id: number, userData: any) =>
    makeApiRequest('/users.php', {
      method: 'PUT',
      body: JSON.stringify({ ...userData, id }),
    }),
  delete: (id: number) =>
    makeApiRequest(`/users.php?id=${id}`, {
      method: 'DELETE',
    }),
};
export const donationApi = {
  apply: async (formData: any) => {
    const response = await fetch(`${API_BASE_URL}/apply_donation.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // Try to parse the error message from response JSON
      let errorMessage = 'Failed to submit volunteer application';
      try {
        const errorData = await response.json();
        if (errorData?.message) errorMessage = errorData.message;
      } catch {
        // ignore JSON parse errors
      }
      throw new Error(errorMessage);
    }

    return response.json();
  },

  getAll: () => makeApiRequest('/donations.php'), // if you have volunteers.php inside /api/
};
export const newsletterApi = {
  apply: async (formData: any) => {
    const response = await fetch(`${API_BASE_URL}/apply_newsletter.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to subscribe to newsletter';
      try {
        const errorData = await response.json();
        if (errorData?.message) errorMessage = errorData.message;
      } catch {}
      throw new Error(errorMessage);
    }

    return response.json();
  },

  getAll: () => makeApiRequest('/newsletter.php'),
};



// partnerApi.ts
export const partnerApi = {
  apply: async (formData: any) => {
    const response = await fetch(`${API_BASE_URL}/apply_partner.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to submit partner application';
      try {
        const errorData = await response.json();
        if (errorData?.message) errorMessage = errorData.message;
      } catch {}
      throw new Error(errorMessage);
    }

    return response.json();
  },

  // You can add more partner-related endpoints here as needed
};

