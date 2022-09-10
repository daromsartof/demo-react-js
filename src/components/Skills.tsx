import React , { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { SkilsCategoryType, SkilsType } from '../utils/TypeInterface';
function Skills( props:any ): JSX.Element {
    const [_filter, setFilter] = useState(0);
    const [_class, setClass]   = useState('animate__bounceIn');
    const [activeClass,setActiveclass] = useState(0);
    const [height,setHeight]   = useState(0);
    const skils = (id: number, image: string, title: string, degree: number,_class: String) => {
        const delai = parseInt((id / 4).toString());
        return (
            <div className={"col-lg-4 animate__animated "+_class+""} key={id}>
                <div className="d-flex kl-skils">
                    <figure><img src={"assets/image/" + image} alt="logo symfony" /></figure>
                    <div className="kl-skils-progress">
                        <span className="skill">{title} </span>
                        <ProgressBar now={degree} />
                    </div>
                </div>
            </div>
        )
    }
    const handeFilter = (id:number , height:number) => {
        const container =  document.querySelector('.kl-skils-content');
        if (container && height < container.clientHeight) setHeight(container.clientHeight);
        setClass('animate__bounceOut')
        setTimeout(() => {
            setClass('animate__bounceIn')
            setFilter(id);
            setActiveclass(id);
        },100)
    }
    return (
        <section className="kl-skils-body pb-5">
            <div className="kl-title">
                <h3>Outils</h3>
            </div>
            <div className="kl-filter">
                <ul>
                    <li className={ activeClass == 0 ? "active-filter" : ""} onClick={() => handeFilter(0,height)}>#all</li>
                    {props.skilsCategory && 
                        props.skilsCategory.map((categorie:SkilsCategoryType,key:number) => <li className={ activeClass == categorie.id ? "active-filter" : ""} key={key} onClick={(e) => handeFilter(categorie.id,height)}>#{categorie.uskCatTitle}</li>)}
                </ul>
            </div>
            <div className="kl-skils-content" style={{minHeight:height}}>
                <div className="row justify-content-center">
                   {props._skils ?
                        props._skils.filter((s:SkilsType) => s.uskCategory == "/api/user_skils_categories/"+_filter || _filter == 0 ).map((data:SkilsType) => skils(data.id, data.uskImageUrl, data.uskTitle, data.uskValue , _class)) : 
                        <img src="assets\image\Dual Ring-1s-137px.gif" alt="load" style={{width:60,height:40}} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills