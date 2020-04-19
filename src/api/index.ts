import axios, { AxiosResponse, AxiosInstance } from 'axios'
import { baseURL, headers } from './config'
import { Post, VoteOptions } from '../store/posts/types'

const instance: AxiosInstance = axios.create({
    baseURL,
    headers
})

export function getPosts(category: string | null): Promise<AxiosResponse<Post[]>> {
    return instance.get(`${category ? '/' + category : ''}/posts`)
}

export function getPost(id: string): Promise<AxiosResponse<Post>> {
    return instance.get(`/posts/${id}`)
}

export function newPost(post: Post) {
    return instance.post(`/posts`, post)
}

export function deletePost(id: string) {
    return instance.delete(`/posts/${id}`)
}

export function updatePost(id: string, title: string, body: string) {
    return instance.put(`/posts/${id}`, {
        title,
        body,
    })
}

export function votePost(id: string, option: VoteOptions) {
    return instance.post(`/posts/${id}`, {
        option,
    })
}