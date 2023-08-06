/* eslint-disable react/prop-types */
import './styles/displayCV.css'
import { v4 as uuid } from 'uuid';
import {Fragment} from 'react'

export default function DisplayCV ({data}) {
    const personalDetails = getPersonalDetails(data.info)
    const highlights = getHighlights(data.highlights)
    const timelines = getTimelines(data.timelines)

    return (
        <div className='base'>
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
                    {data.description}
                </div>
                <div className="timelines">
                    {timelines}
                </div>
            </div>
        </div>
    )
}

const getPersonalDetails = (info) => {
    return (
        <div className='cv-personal-details'>
            <div>
                <img className='cvImage' src={info.img} alt="person image" />
            </div>
            <div className='basic-info'>
                <div className='icon-info'><i className="fa-solid fa-phone"></i><div>{info.phone}</div></div>
                <div className='icon-info'><i className="fa-solid fa-envelope"></i><div>{info.email}</div></div>
                <div className='icon-info'><i className="fa-solid fa-desktop"></i><div>{info.web}</div></div>
                <div className='icon-info'><i className="fa-solid fa-location-dot"></i><div>{info.address}</div></div>
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
    const sectionName = timeline.section
    const listSections = [...timeline.list]
    const showListSections = listSections.map((item, index)=>{
        if (index !== listSections.length -1) {
            return getSection(item)
        }
        else {
            return (
                <Fragment key={uuid()}>
                <hr />
                {getSection(item)}
                </Fragment>
            )
        }
    })
    return (
        <ul key={uuid()}>
            <hr />
            <h3>{sectionName}</h3>
            <hr />
            {showListSections}
        </ul>
    )
}


const getSection = (section) => {
    return (  
        <li key={uuid()}>
            <i>{section.year}</i> 
            <br />
            <i>{section.location}</i>
            <br />
            <strong>{section.name}</strong>
            <p>{section.description}</p>
        </li>
    )
}