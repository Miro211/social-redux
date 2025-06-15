import style from './UsersCard.module.css'
import userImg from '../../assets/user.png'
export function UsersCard({user}){
    return(
        <div className={style.card}>
            <img className = {style.img} src={user.photos.large ? user.photos.large : userImg} alt="" />
            <h2 className={style.name}>{user.name}</h2>
        </div>
    )
}