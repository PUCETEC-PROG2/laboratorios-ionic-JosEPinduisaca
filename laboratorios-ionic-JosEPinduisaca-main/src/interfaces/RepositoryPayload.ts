export interface RepositoryPayload {
    name: string;
    description?: string;
    //private?: boolean;//nuevo campo para indicar si el repositorio es privado o público
    language?: string;
    //auto_init?: boolean;//nuevo campo para indicar si se debe inicializar el repositorio con un README
}