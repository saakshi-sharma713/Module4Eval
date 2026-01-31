import express from "express"

import { addVehicle, assignDriver, getVehicle } from "../Controllers/vehicle.controller.js";
const _route = express.Router();

_route.post("/add",addVehicle);
_route.get("/:vehicleId",getVehicle)
_route.patch("/assign-driver/:vehicleId",assignDriver)
const vehicleRouter = _route;

export default vehicleRouter;