import './App.css';
import Expenses from './client/Expenses/Expenses';

const expenses = [
  { id: '1', title: 'Car Insurance', amount: '234', date: new Date(2022, 3, 3) },
  { id: '2', title: 'Test Insurance', amount: '235', date: new Date(2022, 3, 3) },
  { id: '3', title: 'Test Data', amount: '236', date: new Date(2022, 3, 3) }
];
function App() {
  return (
    <div>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
