export async function getActivities(token) {
    const response = await api.get('/day/1', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }