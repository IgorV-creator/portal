"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_pipe_1 = require("./pipes/validation.pipe");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NeoflexPortal - prototype')
        .setDescription('Документация REST API')
        .setVersion('0.0.1')
        .addTag('react-nodejs-nest-docer')
        .build();
    const documentation = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, documentation);
    app.useGlobalPipes(new validation_pipe_1.ValidatePipe());
    await app.listen(PORT, () => console.log('listen port =', PORT));
}
start();
//# sourceMappingURL=main.js.map