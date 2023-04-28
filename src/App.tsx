import './App.css';
import GuestList from './GuestList';
import UserSearch from './UserSearch';
import EventComponent from './events/EventComponent';

function App() {
  return (
    <div className="App">
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
}

export default App;
