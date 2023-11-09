import axios from "axios";

class PageService {
  fetchGetListUserApi() {
    return axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    });
  }
  fetchGetListPostApi() {
    return axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    });
  }
  fetchGetPostIDApi(id) {
    return axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: "GET",
    });
  }
  fetchGetcommentApi(id) {
    return axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      method: "GET",
    });
  }
  fetchGetUserIDApi(id) {
    return axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      method: "GET",
    });
  }
}

export const pageService = new PageService();
