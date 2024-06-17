import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import storage from "./storage";
import {  ENDPOINT } from "./constants";

class AxiosService {
  public static async get(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    const db = await storage.create();
    const accessToken = await db.get("@token");
    const newConfig = {
      ...config,
      headers: { Authorization: `Bearer ${accessToken}`, ...config?.headers },
    };
    const response: AxiosResponse = await axios.get(ENDPOINT + url, newConfig);
    return response.data;
  }


  public static async post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    const db = await storage.create();
    const accessToken = await db.get("@token");
    const newConfig = {
      ...config,
      headers: { Authorization: `Bearer ${accessToken}`, ...config?.headers },
    };
    const response: AxiosResponse = await axios.post(
      ENDPOINT + url,
      data,
      newConfig,
    );
    return response.data;
  }

  public static async patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    const db = await storage.create();
    const accessToken = await db.get("@token");
    const newConfig = {
      ...config,
      headers: { Authorization: `Bearer ${accessToken}`, ...config?.headers },
    };
    const response: AxiosResponse = await axios.patch(
      ENDPOINT + url,
      data,
      newConfig,
    );
    return response.data;
  }
}

export default AxiosService;
