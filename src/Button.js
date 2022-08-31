import styles from './PostsPagination.module.css';

const Button = (props) => {
  return (
	<>
		<button className={styles.btn} onClick={()=>props.handlePage('dec')} disabled={props.page <= 1}>Prev</button>
			<span>{props.page}</span>
		<button className={styles.btn} onClick={()=>props.handlePage('inc')} disabled={props.disabled}>Next</button>
	</>
  )
}
export default Button