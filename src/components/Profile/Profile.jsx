import css from "../Profile/Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.div}>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers</span>
            <span className={css.count}>{followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span className={css.count}>{views}</span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span className={css.count}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
