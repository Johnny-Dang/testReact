// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     const res = JSON.parse(this.responseText);
//     let html = "";
//     res.data.forEach((item) => {
//       html += `<div>${item.first_name} ${item.last_name}</div>`;
//     });
//     document.getElementById("result").innerHTML = html;
//     console.log(res);
//   }
// };
// xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
// xhttp.setRequestHeader("x-api-key", "reqres-free-v1");
// xhttp.send();
// fetch("https://reqres.in/api/users?page=2", {
//   method: "GET",
//   headers: {
//     "x-api-key": "reqres-free-v1",
//   },
// })
//   .then((respone) => {
//     console.log(respone);
//     return respone.json();
//   })
//   .then((response) => {
//     let html = "";
//     response.data.forEach((item) => {
//       html += `<div>${item.first_name} ${item.last_name}</div>`;
//     });
//     document.getElementById("result").innerHTML = html;
//     console.log(response);
//   });
// axios({
//   method: "get",
//   baseURL: "https://reqres.in/api",
//   url: "/users",
//   headers: { "x-api-key": "reqres-free-v1" },
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// axios
//   .get("https://reqres.in/api/users", {
//     headers: {
//       "x-api-key": "reqres-free-v1",
//     },
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// axios
//   .get("https://reqres.in/api/users/2", {
//     headers: {
//       "x-api-key": "reqres-free-v1",
//     },
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const http = axios.create({
  baseURL: "https://reqres.in/api",
});

http.interceptors.request.use(
  (config) => {
    console.log(config);
    config.headers.Timeout = 100;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (config) => {
    console.log(config);
    return config.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http
  .get("users/2")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
