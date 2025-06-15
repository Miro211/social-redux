import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import socialAPI from '../../Api/api'
import { getUsersAC } from '../../Store/Reducers/useReducer'
import style from './UsersPage.module.css'
import { UsersCard } from '../../Components/UsersCard/UsersCard'
export function UsersPage() {
    const { users } = useSelector((state) => state.usersPage)
    const dispatch = useDispatch()
    useEffect(() => {
        socialAPI.getUsers()
            .then((res) => dispatch(getUsersAC(res.data.items)))
    }, [])
    return (
        <div className={style.body}>
            <div className={style.card}>
                {
                    users.map((user) => {
                        return <UsersCard user = {user} key={user.id}/>
                    })
                }
            </div>
        </div>
    )
}

