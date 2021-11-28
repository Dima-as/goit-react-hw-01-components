import PropTypes from "prop-types";
import s from './FriendList.module.scss'

export default function FriendList({friends}) {
    return(
     <ul className={s.list}>
     {friends.map((friend)=>
             <li key={friend.id} className={s.item}>
             <span className={s.label}
            
              style={friend.isOnline  ? {backgroundColor: "green"}  : {backgroundColor: "red"}}

             >{friend.isOnline}
             
             </span>
             <img className={s.img} src={friend.avatar} alt={friend.name} width="48" />
             <p className={s.name}>{friend.name}</p>
         </li>
     )}
     </ul>
    )
}
FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          isOnline: PropTypes.bool.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),)
}