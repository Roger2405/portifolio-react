import { IProject } from 'interfaces/projects';
import styles from './Project.module.scss';


export default function Project({ id, name, destaque, url, iconSrc, screenshots }: IProject) {
    return (
        <div className={styles.Project} >
            <img className={styles.Project__icon} src={iconSrc} alt="ícone do projeto" />
            <h3 className={styles.Project__name} >{name}</h3>
            <div className={styles.Project__screenshots} >
                {/*screenshots.map(image => <img src={image} />)*/}
                <button className={styles['Project__screenshots--buttonLeft']}>{'<'}</button>
                <img src={screenshots[0]} alt="Captura de tela do projeto em execução"/>
                <button className={styles['Project__screenshots--buttonRight']}>{'>'}</button>
            </div>
        </div>
        
    )
}