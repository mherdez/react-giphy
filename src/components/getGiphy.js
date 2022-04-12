export const getGiphy = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=qASb90GT51gqt90LmBe6KxHqOuZdmymn&q=${category}&limit=25&offset=0&rating=g&lang=es`;

	const resp = await fetch(url);
	const { data } = await resp.json();
	// console.log(data);
	return data;
};
