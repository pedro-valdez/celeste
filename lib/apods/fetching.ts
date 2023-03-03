import axios from "axios"
import { Apod } from "./apods"


const instance = axios.create({
	/*
	 * Since the API only has one endpoint,
	 * it'll be included in the baseURL.
	 */
	baseURL: " https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
})
