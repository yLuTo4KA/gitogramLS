import { makeRequest } from "../requests";

export const getStarredRepo = () => {
  return makeRequest({
    url: "/user/starred",
  });
};
