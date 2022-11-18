export const domParser = (url: string) => {
  const http = new XMLHttpRequest();
  http.open("GET", url, false);
  http.send();
  const parser = new DOMParser();
  return parser.parseFromString(http.responseText, "text/html");
};
