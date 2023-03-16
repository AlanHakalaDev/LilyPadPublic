options = {
	method: 'GET',
    headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'X-RapidAPI-Key': process.env.RAPID_API_KEY,
		'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com'
	},
	body: ''
};
//sample body for search: {"track":"Bezos I","artist":"Bo Burnham","type":"track","sources":["spotify","youtube"]}


export default async function makeRequest(method, body) {
    options.method = method
    options.body = body
    if (req.method === 'GET') {
        fetch('https://musicapi13.p.rapidapi.com/search/introspection', options)
        .then(response => JSONResponse = response.json())
        .catch(err => console.error(err));
      }
      else if (req.method === 'POST') {
        fetch('https://musicapi13.p.rapidapi.com/search', options)
        .then(response => JSONResponse = response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      }

    return JSONResponse
}