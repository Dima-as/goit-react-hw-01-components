import s from "./FriendList.module.scss";
export default function FriendListItem({ item }) {
  return (
    <li className={s.item}>
      <span
        className={s.label}
        style={
          item.isOnline
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
      >
        {item.isOnline}
      </span>
      <img className={s.img} src={item.avatar} alt={item.name} width="48" />
      <p className={s.name}>{item.name}</p>
    </li>
  );
}
