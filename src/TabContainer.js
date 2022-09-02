import {useState} from 'react'
import styles from './TabContainer.module.css'

const TabContainer = ({children}) => {
	const [active, setActive] = useState('tab-1')

  return (
	<div>
		<h1>React Tabs</h1>
		<div className={styles.tabContainer}>
			
			{children.map((item, index) => (
				<div key={index} className={active === `tab-${index}` ? styles.tab__is_active + ' ' + styles.tab : styles.tab} onClick={() => setActive(`tab-${index}`)}>{item}</div>
			))}
		</div>
	
	</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  )
}
export default TabContainer