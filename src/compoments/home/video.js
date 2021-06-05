import React, {Component} from 'react';

class Video  extends  Component {
  render(){
    return (

    <section id="sec_video">

      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <a className="image-hover lightbox thumbnail" href="http://vimeo.com/146489535" data-plugin-options="{&quot;type&quot;:&quot;iframe&quot;}">
              <span className="image-hover-icon image-hover-light">{/* image-hover-light | image-hover-dark */}
                <i className="fa fa-vimeo-square">{/* video icon */}</i>
              </span>
              <img className="img-fluid" src="/demo_files/images/tr.jpg" alt="..." />
            </a>
          </div>
          <div className="col-md-7 col-sm-7">
            <header className="mb-60">
              <h2>Smarty Website+Admin+RTL</h2>
              <p className="lead font-lato">The most complete template, ever!</p>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus deserunt, nobis quae eos provident quidem. Quaerat expedita dignissimos perferendis, nihil quo distinctio eius architecto reprehenderit maiores.</p>
            <p>Similique excepturi voluptates placeat ducimus delectus magnam tempore dolore dolorem quisquam porro modi voluptatum eum saepe dolorum ratione officia sint eos minus.</p>
            <a className="btn btn-default btn-lg fs-15 mt-30 lightbox" href="http://vimeo.com/146489535" data-plugin-options="{&quot;type&quot;:&quot;iframe&quot;}">WATCH VIDEO</a>
          </div> 
        </div>
      </div>
    </section>
    );
  }
}


export default Video;
 