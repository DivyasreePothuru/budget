
import './App.css';



function App() {
  
  const data = [

    {
          text: 'how to build website for free?',
          answers: [
              'Learn how code',
              'Hire a friend',
              'Fake it till you make it',
              'Ask on LinkedIn'
          ],
          correctAnswer: 'Learn how code'
      } 
    
  ]
  return (
    <div className="App">
    <h1> {data.text}</h1>
    </div>
  );
}

export default App;
