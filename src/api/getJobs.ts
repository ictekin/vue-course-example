import axios from "axios";

import type { Job } from "@/api/types";

const getJobs = async () => {
  const baseUrl = "http://localhost:3000";
  const url = `${baseUrl}/jobs`;
  const response = await axios.get<Job[]>(url);
  return response.data;
};

export default getJobs;
