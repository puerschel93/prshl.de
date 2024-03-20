import moment from "moment";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "7sjklu1k",
  dataset: "production",
  useCdn: true,
  apiVersion: moment().format("YYYY-MM-DD"),
});

/** Functions */
export async function getRecentRuns() {
  return client.fetch(
    `*[_type == "run"] | order(date desc) {name, link, date, location, distance, time, elevation, description, image}`,
  );
}
