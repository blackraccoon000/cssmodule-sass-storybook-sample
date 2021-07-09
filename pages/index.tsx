import styles from "styles/pages/index.module.scss"
import {Button} from "stories/Button"

export default function Home() {
  return (
    <div>
			<h1 className={styles.title}>NextJS App.</h1>
			<Button label="Next"/>
    </div>
  )
}
