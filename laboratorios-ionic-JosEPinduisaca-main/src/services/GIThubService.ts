import axios from 'axios';
import { Repository } from '../interfaces/Repository';
import { GithubUser } from '../interfaces/GithubUser';
import { RepositoryPayload } from '../interfaces/RepositoryPayload';

const GITHUB_API_URL =
    import.meta.env.VITE_GITE_API_URL ||
    import.meta.env.VITE_GITHUB_API_URL ||
    'https://api.github.com';

const GITHUB_API_TOKEN =
    import.meta.env.VITE_GITE_API_TOKEN ||
    import.meta.env.VITE_GITHUB_TOKEN ||
    '';

const apiClient = axios.create({
    baseURL: GITHUB_API_URL,
    headers: {
        Accept: 'application/vnd.github+json',
        ...(GITHUB_API_TOKEN ? { Authorization: `Bearer ${GITHUB_API_TOKEN}` } : {})
    }
});

const getErrorMessage = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message;
        return typeof message === 'string' ? message : error.message;
    }

    if (error instanceof Error) {
        return error.message;
    }

    return 'Error inesperado';
};

export const fetchRepositories = async (): Promise<Repository[]> => {
    try {
        const response = await apiClient.get(`/user/repos`, {
            params: {
                per_page: 100,
                sort: 'created',
                direction: 'desc',
                affiliation: 'owner',
                t: Date.now()
            }
        });
        if (response.status !== 200) {
            throw new Error(`${response.statusText}`);
        }
        return response.data;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const createRepository = async (repository: RepositoryPayload): Promise<Repository | null> => {
    try {
        const response = await apiClient.post(`/user/repos`, repository);
        if (response.status !== 201) {
            throw new Error(`${response.statusText}`);
        }
        return response.data;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const fetchUserInfo = async (): Promise<GithubUser | null> => {
    try {
        const response = await apiClient.get(`/user`);
        if (response.status !== 200) {
            throw new Error(`${response.statusText}`);
        }
        return response.data;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

// --- ----aqui estan los de path y delete ---

export const updateRepository = async (owner: string, repo: string, repositoryData: Partial<RepositoryPayload>): Promise<Repository | null> => {
    try {
        const response = await apiClient.patch(`/repos/${owner}/${repo}`, repositoryData);
        if (response.status !== 200) {
            throw new Error(`${response.statusText}`);
        }
        return response.data;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const deleteRepository = async (owner: string, repo: string): Promise<boolean> => {
    try {
        const response = await apiClient.delete(`/repos/${owner}/${repo}`);
        if (![200, 204].includes(response.status)) {
            throw new Error(`${response.statusText}`);
        }
        return true;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};