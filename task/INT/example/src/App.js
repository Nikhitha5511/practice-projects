
import './App.css';
import First from './components/first';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';

function App() {
  const images = [
    'https://images.ctfassets.net/hrltx12pl8hq/1TvicFbzoxaMvy7Yk2O6Wu/84a1373f3b026fd61c6cf5a96d0bf3e0/shutterstock_1036450090_B.jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/3KWcqxPlvmgkpMS5VdjLAk/3cbdd812faf4b8c343b259656d31a0ee/rendered_15.jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/4xEWHexAsVADeDxiCOObZ2/cea749f6cf5ffef05b98814e7ccf427d/Springtime-in-Japan.jpg',
    'https://image.shutterstock.com/image-photo/spring-pink-cherry-blossoms-blue-260nw-141354628.jpg',
    'https://image.shutterstock.com/image-photo/yoshinoyama-nara-japan-view-town-260nw-245773258.jpg',
    'https://image.shutterstock.com/image-photo/hipster-woman-sightseeing-cherry-blossom-260nw-1057891277.jpg',
    'https://image.shutterstock.com/image-photo/japanese-girl-looking-cherry-blossoms-260nw-2282234673.jpg',
    'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_640.jpg'
  ];
  return (
    <div className="App">
      {/* <First/> */}
      {/* <h1>Simple React Carousel</h1> */}
      <Second images={images}/> 
      {/* <Third/>  */}
      {/* <Fourth/> */}
    </div>
  );
}

export default App;
