import Head from 'next/head'
import Image from 'next/image'
import styles from './ProjectAdRead.module.css'

export default function ProjectAdRead({ imgSource, imgAlt, title, description, link, lean}) {

    var linkList = link.split("|").map(item =>
        <a className={styles.projectLink} href={item}>/{item}</a>

    )

    
    
    if(lean == "left"){
        return (
            <>
                <div className={`${styles.area} ${styles.areaLeft}`}>
                    <div className={styles.thumbnailBacker} />
                    <Image src={imgSource} alt={imgAlt} className={styles.thumbnail} width={16*50} height={9*50}/>
                    <h2 className={styles.projectHeader}>{title}</h2>
                    <h3 className={styles.projectDescription}>{description}</h3>
                    {linkList}
                </div>
            </>
        )
    }
    else if(lean == "right"){
        return (
            <>
                <div className={`${styles.area} ${styles.areaRight}`}>
                    <div className={styles.thumbnailBacker} />
                    <Image src={imgSource} alt={imgAlt} className={styles.thumbnail} width={16*50} height={9*50}/>
                    <h2 className={styles.projectHeader}>{title}</h2>
                    <h3 className={styles.projectDescription}>{description}</h3>
                    {linkList}
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className={styles.area}>
                    <div className={styles.thumbnailBacker} />
                    <Image src={imgSource} alt={imgAlt} className={styles.thumbnail} width={16*50} height={9*50}/>
                    <h2 className={styles.projectHeader}>{title}</h2>
                    <h3 className={styles.projectDescription}>{description}</h3>
                    {linkList}
                </div>
            </>
        )
    }
}