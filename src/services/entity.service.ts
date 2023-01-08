import * as uuid from "uuid";
import HttpClient from "./http";
import { Entity } from "../entities/entity";

export class EntityService<T extends Entity> {
  http: HttpClient<T> = new HttpClient<T>("");

  constructor(table: string) {
    this.http = new HttpClient<T>(table);
    return this;
  }

  async get() {
    return await this.http.get();
  }

  async getById(id: string) {
    return await this.http.getById(id);
  }

  async post(entity: T) {
    entity.id = uuid.v4();
    return await this.http.post(entity);
  }

  async put(entity: T) {
    return await this.http.put(entity);
  }
}
