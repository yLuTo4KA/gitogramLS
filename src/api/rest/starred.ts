import { makeRequest } from "../requests";

export const getStarredRepo = () => {
  return makeRequest({
    url: "/user/starred",
  });
};

export const putLikeRepo = ({ owner, repo }) => {
  return makeRequest({
    method: "PUT",
    url: `/user/starred/${owner}/${repo}`,
  });
};

export const deleteLikeRepo = ({ owner, repo }) => {
  return makeRequest({
    method: "DELETE",
    url: `/user/starred/${owner}/${repo}`,
  });
};
