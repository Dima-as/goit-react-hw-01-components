import Profile from "./Profile/Profile.jsx";
import user from "./Profile/Profile.json";
import Statistics from "./Statistics/Statistics.jsx";
import data from "./Statistics/Statistics.json";
import FriendList from "./FriendList/FriendList.jsx";
import friends from "./FriendList/FriendList.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "./TransactionHistory/TransactionHistory.json";
function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
