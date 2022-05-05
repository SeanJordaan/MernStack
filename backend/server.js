import express from 'express'
import cors from 'cors'
import movies from './api/movies.route.js'

const app = express()//intializing a work server 
app.use(cors())// its working between the two ends front and back 
app.use(express.json())//
app.use("/api/v1/movies", movies)//url the after the domain name initialzing  a route 
app.use('*', (req, res) => {//the => is a arrow function and the brackets indicate the request and response
    res.status(404).json({ error: "not found" })//connectet to the one above 
})

export default app