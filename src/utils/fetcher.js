import * as axios from 'axios';

class Fetcher {
  constructor(args) {
    const {
      method,
      host,
      path,
      body,
      customHeaders,
      timeout,
    } = args;

    this.method = method;
    this.baseURL = host || 'http://localhost:3000/api';
    this.url = path;
    this.body = body;
    this.timeout = timeout || 15000;
    this.headers = customHeaders || {};
  }

  async request() {
    const {
      baseURL,
      timeout,
      headers,
      method,
      url,
      body,
    } = this;

    const baseObject = {
      baseURL,
      timeout,
      headers,
    };

    const instance = axios.create(baseObject);

    try {
      const response = await instance({
        method,
        url,
        data: body,
      })
      console.log('response, response', response)

      const { status, statusText, data } = response;
      return  {
        error: false,
        status,
        statusText,
        data,
      };
    } catch (error) {
      return {
        error: true,
        data: error,
      };
    }
  }
}

export default Fetcher;
