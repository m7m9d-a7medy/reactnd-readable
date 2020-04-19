interface Config {
    host: string,
    protocol: string,
    port: number
}

interface Headers {
    Authorization: string
}

const config: Config = {
    host: 'localhost',
    protocol: 'http',
    port: 3001
}

export const baseURL: string = `${config.protocol}://${config.host}:${config.port}`

export const headers: Headers = {
    Authorization: '123456789'
}