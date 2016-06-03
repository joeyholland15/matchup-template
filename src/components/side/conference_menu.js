import React from 'react'
import FilterConferenceLink from '../containers/filter_conference'
import conferenceList from '../../helpers/conference_listings'


const conferenceNames = Object.keys(conferenceList)

let mid = Math.floor(conferenceNames.length/2)

const ConferenceMenu = ({ onClick }) => {
  return (
    <aside className="team-list col">
      <div className="side-col">
        {conferenceNames.slice(0, mid).map(name => 
          <FilterConferenceLink key={name} conference={name}/>
        )}
      </div>
      <div className="side-col">
        {conferenceNames.slice(mid, conferenceNames.length).map(name => 
          <FilterConferenceLink key={name} conference={name}/>
        )}
      </div>
    </aside>
  )
}

export default ConferenceMenu