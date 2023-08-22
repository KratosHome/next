import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 3005
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Тест документації ')
        .setDescription("Тест дескріпшен")
        .setVersion("0.0.1")
        .addTag("bla")
        .build()

    const document = SwaggerModule.createDocument(app, config )
    SwaggerModule.setup("api/doc", app, document)

    await app.listen(PORT, () => {
        console.log(`Server start on port ${PORT}`)
    })
}

start()
