import axios from "axios";
export const API_BASE_URL = "http://localhost:5000/susunjadwal/api";

let instance = axios.create({
  baseURL: API_BASE_URL
});

export function setupAxiosInstance(token) {
  instance = axios.create({
    baseURL: API_BASE_URL,
    headers: { Authorization: `Bearer ${token}` }
  });
}

export function getCourses(majorId) {
  return instance.get(`${API_BASE_URL}/majors/${majorId}/courses`);
}

export function postSaveSchedule(userId, scheduleItems) {
  return instance.post(`${API_BASE_URL}/users/${userId}/user_schedule`, {
    schedule_items: scheduleItems
  });
}
