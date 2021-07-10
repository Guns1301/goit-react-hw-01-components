// 1. импортируем реакт, в каждый модуль, в каждый компонент - иначе JSX не скомпилируется
// 2. создаем компонент с большой буквы
// 3. дефолтный експорт
// 4. прописка и импорт PropTypes
// 5. импорт стилей
// 6. рендер компонента в модуль App, для этого импортируем в App компонет Profile
// 7. прописка PropTypes
// 8. прописка defaultProps
// 9. импорт дефолтных картинок
// 10.

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';
import defaultAvatar from './defaultAvatar.jpg';

// один файл - один компонент

// Имя компонента обязательно должно начинаться с заглавной буквы

// Компонент это JavaScript-функция с очень простым контрактом: функция получает объект свойств который называется props и возвращает дерево React-элементов.

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string, // если PropTypes обязательный то defaultProps для него не нужно прописывать,а если PropTypes не обязательный то для него обязательно должен быть прописан defaultProps
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, //isRequired - обязателный
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

Profile.defaultProps = {
  //Для того чтобы указать значения свойств по умолчанию, у компонентов есть статическое свойство defaultProps, в котором можно указать объект с дефолтными значениями пропов (не обязательно всех). Этот объект будет слит с пришедшим объектом props.
  avatar: defaultAvatar,
};

export default Profile;
