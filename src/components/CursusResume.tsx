import React from 'react';
import '../assets/CursusResume.css';
import { DataCursuType, date } from '../utils/TypeInterface';

function CursusResume() {    

    const listOfResume = (e: number,title: String,start:string, end: string,lieu: String,description: Array<String>) => {
        return (
            <div key={e} className="resume-item">
                <h4>{title}</h4>
                {start || end ? (<h5>{start}{end && (" - " + end)}</h5>) : ('')}
                <p><em>{lieu}</em></p>
                <ul>
                    {Object.entries(description).map((description: Array<String>, e: number) => <li key={e}><span></span>{description[1]}</li>)}
                </ul>
            </div>
        )
    }


    const userCursuses:DataCursuType = {
            id:0,
            usCrsCategory:"cat",
            usCrsTitle : "************************************",
            usCrsStartDate : "******",
            usCrsEndDate   : "******",  
            usCrsPlace  : "****************",
            usCrsDescription : [
                "============================",
                "============================"]
    }
        
    const data:Array<DataCursuType> = [userCursuses,userCursuses,userCursuses];

    const CursusResume: Array<any>  = [
        {
            "id": 1,
            "title": "Experience & Diplôme",
            "body": data.map((data: DataCursuType, e: number) => listOfResume(e,data.usCrsTitle,data.usCrsStartDate, data.usCrsEndDate, data.usCrsPlace, data.usCrsDescription))
        },
        {
            "id": 2,
            "title": "Formation & Interêt",
            "body": data.map((data: DataCursuType, e: number) => listOfResume(e,data.usCrsTitle,data.usCrsStartDate, data.usCrsEndDate, data.usCrsPlace, data.usCrsDescription))
        }
    ]


    return (
        <section className="kl-resume">
            <div className="d-grid custom-grid-cursus animate__animated animate__fadeInDown">
                {CursusResume.map((ele, e) => {
                    return (
                        <div key={e} data-aos="zoom-in" data-aos-delay="100">
                            <div id={"id_resume_" + e} className="kl-card">
                                <div className="kl-card-head">
                                    <h4>{ele.title}</h4>
                                    <ul className="kl-dots-wrap">
                                        <li key={"1"}></li>
                                        <li key={"2"}></li>
                                        <li key={"3"}></li>
                                    </ul>
                                </div>
                                <div className="kl-card-body">
                                    {ele.body}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default CursusResume