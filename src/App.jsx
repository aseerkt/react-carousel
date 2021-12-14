import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';

const items = [
  {
    id: '12xddf',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1280&q=60',
    alt: 'Alone in the unspoilt wilderness',
  },
  {
    id: 'uhfsdf',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
    alt: 'Taking The Scenic Route',
  },
  {
    id: '8jewxj',
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80',
    alt: 'Body Grassland in Yili，Xinjiang，China',
  },
  {
    id: 'asxfwt',
    src: 'https://images.unsplash.com/photo-1437652633673-cc02b9c67a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    alt: 'Mallorca, Llubí, Spain',
  },
  {
    id: 'ytrcew',
    src: 'https://images.unsplash.com/photo-1437651025703-2858c944e3eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    alt: 'Stefan Kunze',
  },
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>React Carousel</h2>
      </header>
      <main className='App-main'>
        <Carousel items={items} />
      </main>
    </div>
  );
}

export default App;
