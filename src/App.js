import Courses from './component/Courses';
import Header from './component/Header'
import Location from './component/Location';
import Mainbar from './component/Mainbar'
import Teachers from './component/Teachers';
import Bottom from './component/Bottom';

document.addEventListener('contextmenu', (event)=>{
  event.preventDefault()
})

function App() {
  return (
    <div className="App">
      <Header />
      <Mainbar />
      <Courses />
      <Teachers />
      <Location />
      <Bottom />
    </div>
  );
}
export default App;
