import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CarsModule } from './cars/cars.module'
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [ConfigModule.forRoot(), CarsModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
