import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

// так создаются динамические коллекции. необходим массив данных и компонент для каждого элемента. после чего map массива и передаем пропсы новые для каждого элемента коллекции и создаем под него компонент

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(
      // так рендериться массив объектов
      ({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id} // Ключ (key) — это специальный строковый проп , уникальный внутри одной коллекции , который нужно задать при создании элементов коллекции. Можно использовать index массива если коллекция статическая и не изменяется
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ),
    )}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      //
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    }),
  ),
};

export default FriendList;
