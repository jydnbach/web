import axios, { AxiosPromise } from 'axios';

// 'http://localhost:3000/users/' // no last forward slash

interface HasId {
  id?: number; //optional properties … tsc --init => tsconfig.json => strict mode to true to give ita different behavior
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
