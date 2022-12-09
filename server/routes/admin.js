import {Router} from "express";
import { createEvent, deleteEvent, updateEvent } from "../controllers/admin.js";
import { eventData, profile } from "../controllers/general.js";

const adm_router= Router();

adm_router.post('/event/create', createEvent);
adm_router.put('/event/update', updateEvent);
adm_router.delete('/event/delete', deleteEvent);
adm_router.get('/profile', profile)
adm_router.get('/events/data',eventData);

export default adm_router;