import styles from './App.module.css';
import "./global.css";
import { MyRoutes } from './MyRoutes';
import './global.css';

export function App() {
  return (
    <div className={styles.app}>
      <MyRoutes />
    </div>
  )
}


