import { makeRequest } from "../requests";

export const getReadme = async ({ owner, repo }) => {
  return makeRequest({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: "application/vnd.github.v3.html+json",
    },
  });
};
