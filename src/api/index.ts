import axios, { AxiosResponse, AxiosInstance } from 'axios'
import { baseURL, headers } from './config'
import { Post, VoteOptions } from '../store/posts/types'

const instance: AxiosInstance = axios.create({
    baseURL,
    headers
})

function getCategories() {
    return instance.get(`/categories`)
}

function getPosts(category: string | null): Promise<AxiosResponse<Post[]>> {
    return instance.get(`${category ? '/' + category : ''}/posts`)
}

function getPost(id: string): Promise<AxiosResponse<Post>> {
    return instance.get(`/posts/${id}`)
}

function newPost(post: Post) {
    return instance.post(`/posts`, post)
}

function deletePost(id: string) {
    return instance.delete(`/posts/${id}`)
}

function updatePost(id: string, title: string, body: string) {
    return instance.put(`/posts/${id}`, {
        title,
        body,
    })
}

function votePost(id: string, option: VoteOptions) {
    return instance.post(`/posts/${id}`, {
        option,
    })
}

function getComments(id: string) {
    return instance.get(`/posts/${id}/comments`)
}

// new, delete, update, vote
function newComment(comment: Comment) {
    return instance.post(`/comments`, comment)
}

function deleteComment(id: string) {
    return instance.delete(`/comments/${id}`)
}

function updateComment(id: string, timestamp: number, body: string) {
    return instance.put(`/comments/${id}`, {
        timestamp,
        body,
    })
}

function voteComment(id: string, option: VoteOptions) {
    return instance.post(`/comments/${id}`, {
        option,
    })
}

const API = {
    getCategories,
    getPosts,
    getPost,
    newPost,
    updatePost,
    votePost,
    deletePost,
    getComments,
    newComment,
    deleteComment,
    updateComment,
    voteComment
}

export default API