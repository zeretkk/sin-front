import c from './profile.module.scss'
import cover from '../../../assets/images/cover.png'
import avatar from '../../../assets/images/Avatars/Animakid.png'
import {useSelector} from "react-redux";
import Button from "../../utility/Button";
import  copyIcon from '../../../assets/icons/Copy.svg'
import  plusIcon from '../../../assets/icons/Plus.svg'
export default function Profile() {
    const user = useSelector(state => state.user.value.data)
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
                        {user.links.map((link, i)=>{
                            return <a href={link} rel={'noreferrer'} target={'_blank'} key={'userLink-'+i}>иконка</a>
                        })}
                    </div>
                </div>
                <div className={c.buttons}>
                    <Button size={'secondary'} filled icon={copyIcon}>{user._id.slice(0, 8)}...</Button>
                    <Button size={'secondary'} icon={plusIcon}>Follow</Button>
                </div>
            </div>

        </div>
    )
}
