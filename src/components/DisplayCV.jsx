import '../styles/displayCV.css'
import { v4 as uuid } from 'uuid';
import {Fragment} from 'react'
import formatDate from "../supp-func/formatDate";


export default function DisplayCV ({data}) {
    const personalDetails = getPersonalDetails(data.info)
    const highlights = getHighlights(data.highlights)
    const timelines = getTimelines(data.timelines)
    return (
        <div className='base' id='pdf-content'>
            <div className="leftContainerDisplay">
                {personalDetails}
                {highlights}
            </div>
            <div className="rightContainerDisplay">
                <div className="heading-info">
                    <h1 className='heading-name'>{data.info.name.toUpperCase()}</h1>
                    <h5 className='heading-profession'>{data.info.profession}</h5>
                </div>
                <div className="cv-description" >
                    {data.info.description}
                </div>
                <div className="timelines">
                    {timelines}
                </div>
            </div>
        </div>
    )
}

const getPersonalDetails = (info) => {
    const img = info.image
    return (
        <div className='cv-personal-details'>
            <div className='cvImg'>
                {info.image&&<img className='cvImage' src={img} alt="person image" />}
            </div>
            <div className='basic-info'>
                {info.phone&&<div className='icon-info'><i className="fa-solid fa-phone"></i><div>{info.phone}</div></div>}
                {info.email &&<div className='icon-info'><i className="fa-solid fa-envelope"></i><div>{info.email}</div></div>}
                {info.web && <div className='icon-info'><i className="fa-solid fa-desktop"></i><div>{info.web}</div></div>}
                {info.address && <div className='icon-info'><i className="fa-solid fa-location-dot"></i><div>{info.address}</div></div>}
            </div>
        </div>
    )
}

const getHighlight = (highlight) => {
    const name = highlight.name.toUpperCase()
    const list = [...highlight.list]
    const listPrint = list.map((item)=> {
        return <li key={uuid()}>{item}</li>
    })
        return (
            <ul className="highlight" key={uuid()}>
                {name}
                <hr />
                {listPrint}
            </ul>
        )
}


const getHighlights = (highlights) => {
    const allHighlights = [...highlights]
    const showHighlights = allHighlights.map((highlight)=>{
        return getHighlight(highlight)
    })
    return (
        <div className="highlights">
            {showHighlights}
        </div>
    )
}

const getTimelines = (data) => {
    const timelines = [...data]
    const showTimelines = timelines.map((section)=>{
        return getTimeline(section)
    })
    return showTimelines
}

const getTimeline = (timeline) => {
    if(timeline.list.length === 0) return
    const sectionName = timeline.name
    const listSections = [...timeline.list]
    const showListSections = listSections.map((item, index)=>{
        if (index === listSections.length -1) {
            return getSection(item)
        }
        else {
            return (
                <Fragment key={uuid()}>
                {getSection(item)}
                <hr />
                </Fragment>
            )
        }
    })
    return (
        <ul key={uuid()}>       
            <hr />
            {listSections.length > 0 && <><h3 className='bold-font'>{sectionName}</h3>
            <hr /></>}
            {showListSections}
        </ul>
    )
}


const getSection = (section) => {
    const keys = Object.keys(section)
    return (  
        <li key={uuid()}>
            {section[keys[1]] && <><i>{formatDate(section[keys[1]])+' - '+formatDate(section[keys[2]])}</i><br /></>}
            {section[keys[3]] && <><i className='italic-font'>{section[keys[3]]}</i><br /></>}
            <strong className='bold-font'>{section[keys[0]]}</strong>
            <p>{section[keys[4]]}</p>
        </li>
    )
}