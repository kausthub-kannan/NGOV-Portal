import { Router } from "express";
import {coordinatingEvents, joinEvents} from "../controllers/volunteer.js";
import { eventData, profile } from "../controllers/general.js";

const vol_router = Router();

vol_router.get('/events/volunteering', joinEvents);
vol_router.get('/events/coordinating', coordinatingEvents);
vol_router.get('/profile', profile);
vol_router.get('/events/data',eventData);

export default vol_router