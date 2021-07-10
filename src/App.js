import React from 'react';
import Section from './components/Section/Section';
import PageTitle from './components/Pagetitle/PageTitle';
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile.js';
import Statistics from './components/Statistics/Statistics.js';
import FriendList from './components/FriendsList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';

import { name, tag, location, avatar, stats } from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <PageTitle text="React Homework. Module 1" />
      <Section>
        <Title text="Task One. Social Media Profile" />
        <Profile
          name={name} // тут передаются свойства объекта props который приходит в функцию Компонента
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Section>
      <Section type="highlighted">
        <Title text="Task Two. Statistics" />
        {/* Statistics component with title prop */}
        <Statistics title="Upload stats" stats={statisticalData} />
        {/* Statistics component without title prop */}
        <Statistics stats={statisticalData} />
      </Section>
      <Section>
        <Title text="Task Three. Friends List" />
        <FriendList friends={friends} />
      </Section>
      <Section type="highlighted">
        <Title text="Task Four. Transactions History" />
        <TransactionHistory items={transactions} />
      </Section>
      <Section>
        <Title text="To be continued..." />
      </Section>
    </>
  );
}

export default App;
