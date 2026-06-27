import axios from 'axios';
import { Repository } from '../interfaces/Repository';

const GITHUB_API_URL = import.meta.env.VITE_GITE_API_URL;
const GITHUB_API_TOKEN = import.meta.env.VITE_GITE_API_TOKEN;

export const fetchGitHubRepoitories = async () : Promise<Repository[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/repos`, {
            headers: {
                Authorization: `token ${GITHUB_API_TOKEN}`
            },
                params: {
                    per_page: 100,
                    sort: 'created',
                    direction: 'desc',
                    afiliation: 'owner',
                    t: Date.now() // evitar cache
                }
    }     );
        if (response.status !== 200) {
            throw new Error(`${response.statusText}`);
        }
        return response.data;
    } catch (error) {
        throw new Error(`${(error as Error).message}`); 
    }
};