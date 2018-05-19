import 'reflect-metadata';

import { createExpressServer } from 'routing-controllers';
import { BibliotecaController } from './controllers/biblioteca.controller';

const applicacion = createExpressServer({
    cors: true,
    controllers: [BibliotecaController]
});

applicacion.listen(3000);
console.log('Escuchando en: http://localhost:3000');