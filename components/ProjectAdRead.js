import Head from 'next/head'
import Image from 'next/image'
import styles from './ProjectAdRead.module.css'

export default function ProjectAdRead({ imgSource, imgAlt, title, description, link, lean, emote}) {
    lean = lean.toLowerCase();
    if(link != null){
        var linkList = link.split("|").map(item =>

            {if(item.split("^")[1] != null){
                var out = <a className={styles.projectLink} href={item.split("^")[0]}>{item.split("^")[1]}</a>
            } else{
                var out = <a className={styles.projectLink} href={item}>{item}</a>
            }
        
            return out}
    
        )
    }
    
    if(imgSource != null){
        var imageObject = <>
            <div className={styles.thumbnailBacker} />
            <Image src={imgSource} alt={imgAlt} className={styles.thumbnail} width={16*50} height={9*50}/>
        </>
    }

    if(emote != null){
        var titleObject = <>
            <h2 className={styles.projectHeader}>{emote} {title}</h2>
        </>
    } else{
        var titleObject = <>
            <h2 className={styles.projectHeader}>{title}</h2>
        </>
    }

    
    
    if(lean == "left"){
        return (
            <>
                <div className={`${styles.area} ${styles.areaLeft}`}>
                    {imageObject}
                    {titleObject}
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
                    {imageObject}
                    {titleObject}
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
                    {imageObject}
                    {titleObject}
                    <h3 className={styles.projectDescription}>{description}</h3>
                    {linkList}
                </div>
            </>
        )
    }
}