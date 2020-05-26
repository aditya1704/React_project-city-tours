import React, { Component } from 'react'
import {tourData} from '../../tourData' 
import Tour from '../Tour'
import './tourlist.scss'

export default class TourList extends Component {
    state={
        tours:tourData
    };

    removeTour = id=>{
        const updatedTours=this.state.tours.filter((tour)=>tour.id != id)
        this.setState({
            tours:updatedTours
        })
    }
    
    
    render() {
        const  {tours}=this.state

        return (
            <section className='tourlist'>
                {
                    tours.map((tour)=>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />))
                }
            </section>
        )
    }
}
