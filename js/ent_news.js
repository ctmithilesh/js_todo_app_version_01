window.onload = () => {

    const getEntNews = async () => {

        // GET Request 
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=65d65b2716db429895cbc3254a475c0e')
        let result = await response.json()
        result = result.articles
        console.log(result.articles)
        if (response.ok) {

            result.map((item) => {

                const listEl = document.getElementById("news")
                const list = document.createElement("li")
                list.innerHTML = item.title
                listEl.append(list)


            })


        }
    }
    getEntNews()

}