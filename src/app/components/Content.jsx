// src/app/page.js
import Link from 'next/link';
import data from '../data/data.json';

export default function Content() {

  const bgimg = {
    // width: "200%",
    backgroundSize:"cover",
    borderRadius: "190px",
    margin: "20px",
    backgroundRepeat : 'noRepeat',
    //  background-repeat:no-repeat
  }

  return (
    <div className='contentpage'>
      <h1>Data:Edit banners</h1>
      <div className='contentMap'>
        {data.map((item) => (
          <div key={item.id} className='contentMapChild' style={{
            margin: "20px",
            backgroundRepeat: 'noRepeat', backgroundSize: "cover", 
            background:item.backgroundGradient}}>
            <h4 className='contenth2'>{item.title}</h4>
            <p className='contentp'>{item.description}</p>
            <Link href={`/details/${item.id}`}> 
              <span className='material-icon'>Edit</span>
              </Link>
            <img className='contentimg' src={item.image} alt={item.title} width="300" />
            <button className="btn">{item.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
