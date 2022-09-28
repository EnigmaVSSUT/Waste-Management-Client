const urlMetadata = require('url-metadata')

export default function handler(req, res, next) {
    const { url } = req.query
    console.log(url)
    return new Promise((resolve, reject) => {
        urlMetadata(url)
            .then(metadata => {
                res.status(200).json({
                    success: 1,
                    meta: {
                        title: metadata.title || metadata['og:title'],
                        description: metadata.description || metadata['og:description'],
                        image: {
                            url: metadata.image || metadata['og:image']
                        }
                    }
                })
                resolve()
            })
            .catch(err => {
                res.status(500).json({
                    success: 0
                })
                resolve()
            })
    })
}
