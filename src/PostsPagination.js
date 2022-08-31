import { useState, useEffect } from 'react'
import Button from './Button';
import styles from './PostsPagination.module.css';

const Header = () => {
	
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [postCount, setPostCount] = useState(0)

	const [page, setPage] = useState(1);
	const handlePage = (x) => {
		x === 'dec' ? setPage(prev => +prev-1) : setPage(prev => +prev+1)
	}

	const search = window.location.search;
	const params = new URLSearchParams(search);
	const query = params.get('page');
	
	useEffect(()=>{	
		if(query) setPage(query)
	},[])

	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: "smooth"
		});
	  };
	
		useEffect(()=>{
			const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?page=${page}`;
			window.history.pushState({path:newurl},'',newurl);
		},[page])

	useEffect( ()=>{
		setLoading(true)
		fetch(`https://native.tportal.hr/planet-b/wp-json/wp/v2/posts?page=${page}`)
		.then(res=>{
			if(res.ok) return res.json()
			setError(true)
		})
		.then(data=>{
			setLoading(false)
			setData(data)
			setError(false)
			setPostCount(data[0].images['post-count'])
			scrollToTop();
		})
		.catch(err => {
			setError(true)
			console.log(err)
		})
	},[page])

	if(error) return 'Something went wrong'
		
  return (
	<div className={styles.container}>
		<h1>React Pagination</h1>
		{data?.map(post => (
			<p className={styles.item} key={post.id} dangerouslySetInnerHTML={{__html: post.title.rendered}}
		  />
		))}
{loading && <p>loading posts...</p>}
<Button page={page} handlePage={handlePage} disabled={page*10 >= postCount}/>

	</div>
  )
}
export default Header