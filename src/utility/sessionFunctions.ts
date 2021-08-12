import { SESSION_DURATION_IN_HRS } from "../constants";

export const setSessionExpiryTimeStamp = () => {
  const currentTime = new Date();
  return currentTime.setHours(currentTime.getHours() + SESSION_DURATION_IN_HRS);
};
