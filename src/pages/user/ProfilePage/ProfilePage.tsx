import c from './profile.module.scss'
import cover from '../../../assets/images/cover.png'
import avatar from '../../../assets/images/Avatars/Animakid.png'
import {useDispatch, useSelector} from "react-redux";
import Button from "../../../components/utility/Button";
import  copyIcon from '../../../assets/icons/Copy.svg'
import  plusIcon from '../../../assets/icons/Plus.svg'
import {drop} from "../../../slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {RootState} from "../../../store";
import {UserService} from "../../../services/UserService";
export default function ProfilePage() {
    const userState = useSelector((state :RootState) => state.user)
    const user = userState.data
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout=async ()=>{
        await UserService.logout()
        navigate('/')
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(!userState.loaded || !localStorage.getItem('token')){
                dispatch(drop())
                navigate('/')
                return clearTimeout(timer)
            }
            return clearTimeout(timer)
        }, 10000)
        return ()=>clearTimeout(timer)
    }, [userState, dispatch, navigate])
    return (
        <div className={c.wrapper}>
            <div className={c.cover}>
                <img src={cover} alt="profile cover"/>
            </div>
            <div className={c.info}>
                <img src={avatar} alt="profile avatar"/>
                <div className={c.text}>
                    <h2>{user.username}</h2>
                    <div className={c.statistics}>
                        <div className={c.item}>
                            <h4>{user.volume}</h4>
                            <p>Volume</p>
                        </div>
                        <div className={c.item}>
                            <h4>{user.sold}</h4>
                            <p>NFTs Sold</p>
                        </div>
                        <div className={c.item}>
                            <h4>{user.followers}</h4>
                            <p>Followers</p>
                        </div>
                    </div>
                    <div>
                        <h5 className={c.label}>Bio</h5>
                        <p>{user.bio}</p>
                    </div>
                    <div>
                        <h5 className={c.label}>links</h5>
                        {user?.links?.map((link, i)=>{
                            return <a href={link} rel={'noreferrer'} target={'_blank'} key={'userLink-'+i}>иконка</a>
                        })}
                    </div>
                    <p className={c.logout} onClick={handleLogout}>Logout</p>
                </div>
                <div className={c.buttons}>
                    <Button size={'secondary'} filled icon={copyIcon}>{user?._id?.slice(0, 8)}...</Button>
                    <Button size={'secondary'} icon={plusIcon}>Follow</Button>
                </div>
            </div>

        </div>
    )
}
