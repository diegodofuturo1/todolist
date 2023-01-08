import { Entity } from "../entities/entity";

export default class HttpClient<T extends Entity> {
  private url: string = "http://localhost:3000/";
  constructor(endpoint: string) {
    this.url = this.url + endpoint;
  }

  async get(): Promise<T[]> {
    return await new Promise((resolve, reject) => {
      fetch(this.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data as T[]))
        .catch(() => reject([]));
    });
  }

  async getById(id: string): Promise<T> {
    return await new Promise((resolve, reject) => {
      fetch(this.url + "/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data as T))
        .catch(() => reject([]));
    });
  }

  async post(body: T) {
    return await new Promise((resolve, reject) => {
      fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  async put(body: T) {
    return await new Promise((resolve, reject) => {
      fetch(this.url + "/" + body.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
