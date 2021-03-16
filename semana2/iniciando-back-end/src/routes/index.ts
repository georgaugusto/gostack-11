import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import weatherStationRoutes from './weatherStation.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/weatherstation', weatherStationRoutes);
routes.use('/sessions', sessionsRouter);

export default routes;
