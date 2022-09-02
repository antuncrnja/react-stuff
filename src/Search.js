import {useSearchParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Search = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams()
	const [query, setQuery] = useState(searchParams.get('q') ? searchParams.get('q') : '')
	const [select, setSelect] = useState(searchParams.get('f') ? searchParams.get('f') : '')

	useEffect( ()=>{
		setLoading(true)
		fetch(`https://native.tportal.hr/planet-b/wp-json/wp/v2/posts`)
		.then(res=>{
			if(res.ok) return res.json()
			setError(true)
		})
		.then(data=>{
			setLoading(false)
			setData(data.filter(post => (
				post.title.rendered.toLowerCase().includes(query.toString().toLowerCase()) 
				&& post.title.rendered.toLowerCase().includes(select.toString().toLowerCase()) 
				)) )
			setError(false)
		})
		.catch(err => {
			setError(true)
			console.log(err)
		})
	},[query, select])

	const handleSearch = (e) => {
		const newQuery = e.target.value;
		setQuery(newQuery)
		searchParams.set('q', newQuery)

		setSearchParams(searchParams)
		if(newQuery.length == 0) {
			searchParams.delete('q')
			setSearchParams(searchParams)
		}
	}

	const handleSelect = (e) => {
		const newQuery = e.target.value;
		setSelect(newQuery)
		searchParams.set('f', newQuery)

		setSearchParams(searchParams)
	}

  return (
	<div>
		<h1>Search/Filter with URL Params</h1>
		<input type="search" placeholder="search" value={query} onChange={handleSearch}/>

		<select name="select" value={select} onChange={handleSelect}>
			<option value="d">D</option>
			<option value="devet">Devet</option>
			<option value="berlinu">Berlinu</option>
		</select>

		{loading && <h1>Loading...</h1>}
		
		{data.length <= 0 && <p>There are no posts that contains: {query}</p>}
		{data.map(post => (
			<p key={post.id}>{post.title.rendered}</p>
		))}
	</div>
  )
}
export default Search