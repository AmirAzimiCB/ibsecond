import client from "@sanity/client";

export default client({
  projectId: "gwaghe3o",
  dataset: "post",
  useCdn: true,
  apiVersion: "2021-10-21",
});
