import axios from "axios";

const BlogApiInstance = axios.create({
	baseURL: 'https://enigma-api.onrender.com/'
})

export default {
	blogs: {
		getAll: () => BlogApiInstance.get('api/blog'),
		create: (payload) => BlogApiInstance.post('/blog', payload),
		edit: (postId, payload) => BlogApiInstance.put(`/blog/` + postId, payload),
		getById: (id) => {
			console.log('req', id)
			return BlogApiInstance.get(`/blog/${id}`)
		},
		delete: (id) => BlogApiInstance.delete(`api/blog/${id}`),
	},
}

