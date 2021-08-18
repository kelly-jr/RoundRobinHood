import { SESSION_DURATION_IN_HRS } from "../constants";

export const setSessionExpiryTimeStamp = (numberOfHrs: number = SESSION_DURATION_IN_HRS) => {
  const currentTime = new Date();
  return new Date(currentTime.setHours(currentTime.getHours() + numberOfHrs));
};
