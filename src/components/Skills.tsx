import React , { useContext, useState } from 'react';
import { userContext } from '../App';
import { GlobalDataType, SkilsCategoryType, SkilsType } from '../utils/TypeInterface';
function Skills( props:any ): JSX.Element {
    const  data                        = useContext<GlobalDataType>(userContext);  
    const [_filter, setFilter]         = useState<string>("all");
    const [_class, setClass]           = useState<string>('animate__bounceIn');
    const [activeClass,setActiveclass] = useState<number>(0);
    const [height,setHeight]           = useState<number>(0);



    const skils = (id: number, image: string, title: string, degree: number,_class: String) => {
        const delai = parseInt((id / 4).toString());
        return (
            <div className={"col-lg-4 animate__animated "+_class+""} key={id}>
                <div className="d-flex kl-skils">
                    <figure><img src={"assets/image/" + image} alt="logo symfony" /></figure>
                    <div className="kl-skils-progress">
                        <span className="skill">{title} </span>
                      
                    </div>
                </div>
            </div>
        )
    }


    const handeFilter = (name:string , height:number,id:number) => {
        const container =  document.querySelector('.kl-skils-content');
        if (container && height < container.clientHeight) setHeight(container.clientHeight);
        setClass('animate__bounceOut')
        setTimeout(() => {
            setClass('animate__bounceIn')
            setFilter(name);
            setActiveclass(id);
        },100)
    }

    
    return (
        
        <section className="kl-skils-body pb-5">
            <div className="kl-title">
                <h3>Outils</h3>
            </div>
            <div className="kl-filter" id='id-filter'>
                <ul>
                    <li className={ activeClass == 0 ? "active-filter" : ""} onClick={() => handeFilter('all',height,0)}>#Tous</li>
                    {data.SkilsCategory && 
                        data.SkilsCategory.map((categorie:SkilsCategoryType,key:number) => <li className={ activeClass == categorie.id ? "active-filter" : ""} key={key} onClick={(e) => handeFilter(categorie.uskCatTitle,height,categorie.id)}>#{categorie.uskCatTitle}</li>)}
                </ul>
            </div>
            <div className="kl-skils-content" style={{minHeight:height}}>
                <div className="row justify-content-center" id='id-skils-contents'>
                   {data.skils ?
                        data.skils.filter((s:SkilsType) => s.uskCategory == _filter || _filter == "all" ).map((data:SkilsType) => skils(data.id, data.uskImageUrl, data.uskTitle, data.uskValue , _class)) : 
                        <img src="assets\image\Dual Ring-1s-137px.gif" alt="load" style={{width:60,height:40}} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills