import axios, { AxiosError } from "axios";
import fetch from "node-fetch";

axios
  .get("https://httpstat.us/429")
  .then()
  .catch((err: AxiosError) => console.log({ err: err.message }));

fetch("https://httpstat.us/429")
  .then()
  .catch((err) => console.log({ err: err.message }));
