import {
  API_BASE_URL,
  ACCESS_TOKEN,
  USER,
  IS_AUTHENTICTED,
  USER_ID,
} from "./constants";

export const request = (options) => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
  }

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response
      .json()
      .then((json) => {
        if (!response.ok) {
          return "NOT200";
        }
        return json;
      })
      .catch(() => console.log("error while Fetching"))
  );
};