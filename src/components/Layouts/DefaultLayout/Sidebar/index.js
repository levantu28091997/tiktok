import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <h2>Sidebar</h2>
        </div>
    )
}

export default Sidebar
