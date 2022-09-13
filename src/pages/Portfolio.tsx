import Description from '../components/Description'
import React, { useContext } from 'react';
import { userContext } from '../App';
import { PortFolioType } from '../utils/TypeInterface';
import { BASE_UPLOAD } from '../utils/constants';

function PortfolioDetail(portfolio: any) {
  return (
    <>
      <div className="modal fade" key={portfolio.id} id={"exampleModal-" + portfolio.id} tabIndex={-1} aria-labelledby={"#exampleModal-" + portfolio.id + "Label"} aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content kl-modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{portfolio.usprTitle}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{portfolio.usprDescription}</p>
              <figure>
                <img className='img-fluid' src={BASE_UPLOAD+portfolio.usprImagePath} alt={portfolio.usprTitle} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function PortfolioContainer(props:any): JSX.Element {

  const handlClic = (id:number) => {
    const e = document.querySelector('.item'+id+' .kl-portfoliot-content');
    const child = document.querySelector('.item'+id+' .kl-portfolio-title p span');
    if (e && child) {
      e.classList.toggle("hide"); 
      child.innerHTML = (child && e.clientHeight > 45 ) ? "+" : "-"
    }
  }

  return (
    <>
      <div className={"item" + props.id + " animate__animated animate__"+props.animation[props.id]} key={props.id}>
        <div className={(props.id != 5) ? 'kl-portfoliot-content hide' : 'kl-portfoliot-content'}>
          <div className='kl-portfolio-img' data-bs-toggle="modal" data-bs-target={"#exampleModal-" + props.id}>
            <img key={props.id} className='img-fluid' src={BASE_UPLOAD+props.usprImagePath} alt={props.usprTitle} style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <div className='kl-portfolio-title' onClick={props.usprTitle ? (e) => handlClic(props.id) : () => {}}>
            <p>{props.usprTitle ? props.usprTitle : '**********'}<span style={{fontWeight:"bold"}}>+</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

function Portfolio() {
  const { data }                        = useContext(userContext); 
  const portfolios:Array<PortFolioType> = data.porfolio;
  const Animation:Array<string>         = ["fadeIn","fadeInDown","fadeInLeft","fadeInRight","fadeInUp","fadeInTopLeft","fadeInTopRight","fadeInBottomLeft","fadeInBottomRight"];


  return (
    <>
      <div className='container-lg mb-5'>
        <section className="kl-about-body">
          <Description _title={"Portfolio"} _more="" />
        </section>
        {portfolios && portfolios.map((data: object,key:number) => <PortfolioDetail key={key} {...data} />)}
        <section className="kl-portfolio">
          <div className='d-grid custom-grid'>
            {portfolios && portfolios.map((data: object,key:number) => <PortfolioContainer key={key} {...data} animation={Animation}/>)}
          </div>
        </section>
      </div>
    </>
  )
}

export default Portfolio