import axios, { AxiosInstance, AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env[`API_URL`] || '';

export class xPortalApi {
    protected accessToken: string;
    protected client: AxiosInstance;

    public constructor(accessToken: string) {
        this.accessToken = accessToken;
        this.client = axios.create({
            baseURL: baseURL,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                //'Content-Type': 'application/json',
            },
        });
    }

    public async get<T>(url: string): Promise<AxiosResponse<T>> {
        return this.client.get<T>(url);
    }
}
