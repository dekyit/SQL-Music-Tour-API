// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event, Band, Meet_Greet, Stage, Set_time } = db 
const bands = require('./bands_controller')

// FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
events.get('/:name', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { name: req.params.name },
            include: [
                {
                    model: Meet_Greet,
                    as: "meet_greet",
                    attributes: {exclude: ["event_id", "band_id"]},
                    include: {
                        model: bands,
                        as: band,
                    }
                },
                {
                    model: Set_time,
                    as: "set_time",
                    attributes: {exclude: ["event_id", "stage_id", "band_id"]},
                    include: [
                        {model: Band, as:"band"},
                        {model: Stage, as: "stage"}
                    ]
                },
                {
                    model: Stage,
                    as: "stages",
                    through: {attributes: []}
                }
            ]
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A EVENT
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

events.put(':/id', async (req, res) =>{
    try{
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
        } catch(err) {
            res.status(500).json(err)
        }
    
})

// DELETE A BAND
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = events
