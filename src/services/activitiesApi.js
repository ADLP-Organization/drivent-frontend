import api from './api';

export async function getEventDays(token) {
  const response = await api.get('/activities/days', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function getActivitiesByDayId(token, dayId) {
  const response = await api.get(`/activities/days/${dayId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function postActivity(token, body) {
  const response = await api.post('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function getDays(token) {
  const response = await api.get('/activities/days', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function getUserActivities(token) {
  const response = await api.get('/activities/userActivities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
