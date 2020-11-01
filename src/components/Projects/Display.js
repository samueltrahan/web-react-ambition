import React from 'react';
import pic01 from '../../assets/images/pic01.jpg';
import pic02 from '../../assets/images/pic02.jpg';
import pic03 from '../../assets/images/pic03.jpg';
import pic04 from '../../assets/images/pic04.jpg';
import './Display.css'

export default function Display() {
  return (
    <div className="minor">
      <section className="idea" >
        <article className="idea-1" style={{backgroundImage: `url(${pic01})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100%'}}>
        <div>
          <h1>Project 1</h1>
        </div>
        </article>
      </section>
      <section className="idea">
        <article style={{backgroundImage: `url(${pic02})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className="idea-2">
          <h1>Project 2</h1>
        </div>
        </article>
      </section>
      <section className="idea">
        <article style={{backgroundImage: `url(${pic03})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className="idea-3">
          <h1>Project 3</h1>
        </div>
        </article>
      </section>
      <section className="idea">
        <article style={{backgroundImage: `url(${pic04})`}}>
        <div className="idea-4">
          <h1>Project 4</h1>
        </div>
        </article>
      </section>
    </div>
  )
}
