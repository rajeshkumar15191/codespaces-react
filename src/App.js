import './App.css';
import ExpenseItem from './components/ExpenseItem';
const expenses = [
  { id: '1', title: 'Car Insurance', amount: '234', date: new Date(2022, 3, 3) },
  { id: '2', title: 'Test Insurance', amount: '235', date: new Date(2022, 3, 3) },
  { id: '3', title: 'Test Data', amount: '236', date: new Date(2022, 3, 3) }
];
function App() {
  return (
    <div>
      <h2>Let's Start</h2>
      {
        expenses.map((el) => {
          return (
            <div className>
              <ExpenseItem date={el.date} title={el.title} amount={el.amount}></ExpenseItem>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
