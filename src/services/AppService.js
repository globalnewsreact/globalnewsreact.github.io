export async function peticion() {
    try {
        const res = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=81f8306bd2eb42c6a34300f29ed4a25c')
        const data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}