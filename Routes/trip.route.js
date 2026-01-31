import express from "express"
import { createUser } from "../Controllers/user.controller.js";
import { createTrip, deleteTrip, getTrip } from "../Controllers/trip.controller.js";
const _route = express.Router();

_route.post("/create",createTrip);
_route.get("/:tripId",getTrip);
_route.delete("/delete/:tripId",deleteTrip);
const tripRouter = _route;

export default tripRouter;