import axios from "axios";

// baseURL value differs depending on device you're running:
// directly on mac: https://localhost:3333
// on physical mobile device: Expo LAN `http://<ip adress>:3333` (without the 19000 at the end)
// on android emulator, run `adb reverse tcp:3333 tcp:3333`
// will leave on localhost for default for security :P

const api = axios.create({
  baseURL: "https://localhost:3333",
});

export default api;
