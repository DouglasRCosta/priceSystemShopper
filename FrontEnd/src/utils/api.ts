import axios, { AxiosError } from "axios"

let url = 'http://localhost:3000/'

const api = axios.create({
    baseURL: url
})

export const updatePriceByCsv = async (formData: FormData) => {
    try {
        const response = await api.post('check-price', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data)
        return response.data;

    } catch (error: AxiosError | any) {
        console.error('Erro na solicitação:', error);
        return error.response.data;

    }
}