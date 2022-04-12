import { useEffect, useState } from 'react';
import { getGiphy } from './components/getGiphy';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		getGiphy('dog').then((e) => {
			setData(e);
		});
	}, []);
	console.log(data);

	return (
		<>
			<h1>
				{data.map((gif) => (
					<img key={gif.id} src={gif.images.downsized_medium.url} />
				))}
			</h1>
		</>
	);
}

export default App;
