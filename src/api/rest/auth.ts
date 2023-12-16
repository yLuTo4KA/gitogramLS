import { makeRequest } from "../requests";
import env from "../../../env";

export const getAuth = () => {
  const gitAuthApi = "https://github.com/login/oauth/authorize";

  const params = new URLSearchParams();

  params.append("client_id", env.clientId);
  params.append("scope", "repo, user");

  window.location.href = `${gitAuthApi}?${params}`;
};

export const getToken = (code) => {
  return makeRequest({
    url: "https://webdev-api.loftschool.com/github",
    method: "POST",
    data: {
      clientId: env.clientId,
      clientSecret: env.clientSecret,
      code,
    },
  });
};

export const getUserData = () =>
  makeRequest({
    url: "/user",
  });

export const getUserRepos = () =>
  makeRequest({
    url: "/user/repos",
  });
export const getUserFollowing = () =>
  makeRequest({
    url: "/user/following",
  });
export const unFollowUser = (username) =>
  makeRequest({
    method: "DELETE",
    url: `/user/following/${username}`,
  });
export const isStarred = (owner, repo) =>
  makeRequest({
    url: `/user/starred/${owner}/${repo}`,
  });
export const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
