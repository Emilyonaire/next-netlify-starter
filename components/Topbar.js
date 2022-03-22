import styles from './Topbar.module.css'


export default function Topbar({ title }) {
    return (
        <>
            <nav class="navbar" role={"navigation"} aria-label="main navigation">
                <div className='navbar-brand'>
                    <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} href="index/#" />
                </div>
            </nav>

        </>
    )
}
  