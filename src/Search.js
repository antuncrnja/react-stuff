import {useSearchParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Search = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);


	const [searchParams, setSearchParams] = useSearchParams()
	const [query, setQuery] = useState(searchParams.get('q') ? searchParams.get('q') : '')

	useEffect( ()=>{
		setLoading(true)
		fetch(`https://native.tportal.hr/planet-b/wp-json/wp/v2/posts`)
		.then(res=>{
			if(res.ok) return res.json()
			setError(true)
		})
		.then(data=>{
			setLoading(false)
			setData(data.filter(post => post.title.rendered.toLowerCase().includes(query.toString().toLowerCase()) ) )
			setError(false)
		})
		.catch(err => {
			setError(true)
			console.log(err)
		})
	},[query])

	const handleSearch = (e) => {
		const newQuery = e.target.value;
		setQuery(newQuery)

		newQuery.length > 0 ? setSearchParams({q: newQuery}) : setSearchParams()
	}

  return (
	<div>
		<input type="search" placeholder="search" value={query} onChange={handleSearch}/>
		{loading && <h1>Loading...</h1>}
		
		{data.length <= 0 && <p>There are no posts that contains: {query}</p>}
		{data.map(post => (
			<div key={post.id}>{post.title.rendered}</div>
		))}
	</div>
  )
}
export default Search