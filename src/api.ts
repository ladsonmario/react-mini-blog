const http: string = 'https://jsonplaceholder.typicode.com';

export const API = {
    getAllPosts: async () => {
        let result = await fetch(`${http}/posts`);
        return result.json();
    },
    addNewPost: async (title: string, body: string, idUser: number) => {
        let result = await fetch(`${http}/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, body, idUser: 1 }),
            headers: { 'Content-Type': 'application/json' }
        });
        return result.json();
    }
}