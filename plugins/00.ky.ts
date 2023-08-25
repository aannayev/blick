import ky from 'ky'

const createInstance = () => {
    return ky.create({
        prefixUrl: 'http://localhost:3001'
    })
}

export default defineNuxtPlugin((nuxtApp) => {
    const api = createInstance()

    return {
        provide: {
            api
        }
    }
})