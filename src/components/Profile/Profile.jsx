import PropTypes from "prop-types";
import s from "./Profile.module.scss";

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className={s.container}>
      <img className={s.avatar} src={avatar} alt={username} width="100" />
      <h1 className={s.name}>{username}</h1>
      <p className={s.tag}>@{tag}</p>
      <p className={s.tag}>{location}</p>
      <ul className={s.list}>
        <li className={s.item}>
          <span>followers</span>
          <span className={s.number}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>views</span>
          <span className={s.number}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>likes</span>
          <span className={s.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
