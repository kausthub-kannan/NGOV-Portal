import {Router} from "express";
import { logIn, signIn } from "../controllers/authentication.js";
import { userList } from "../controllers/general.js";
import { readCompletedEvents, readOngoingEvents } from "../controllers/readData.js";
import { reqAccept, reqDecline } from "../controllers/volunteer.js";
const router = Router();

router.get('/events/completed', readCompletedEvents);
router.get('/events/ongoing', readOngoingEvents);
router.post('/signIn', signIn);
router.post('/logIn', logIn);
router.get('/userList', userList)
router.get('/request/accept', reqAccept)
router.get('/request/decline', reqDecline)


export default router