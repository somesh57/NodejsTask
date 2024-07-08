const axios = require("axios");

const url =
  "http://ec2-13-234-117-185.ap-south-1.compute.amazonaws.com/perf/v1/campaign?isOptimize=1";
const headers = {
  token: "BCpdPT7N7K/98VvSvqcC9N3+ODg8FAQ1aq6EnkZ5hTyYyWw7HDDuVq8/oHfCU43V",
};

axios
  .get(url, { headers })
  .then((response) => {
    console.log("Data received:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
