import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as methodOverride from 'method-override';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.use(methodOverride('_method'));

  app.use(
    session({
      secret: 'MyStrongPortfoliocmsSecret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 15 * 60 * 1000,
      },
    }),
  );

  await app.listen(3000, () => {
    console.log('Running on port 3000');
  });
}
bootstrap();
