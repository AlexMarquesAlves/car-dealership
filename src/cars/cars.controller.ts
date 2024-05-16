import { Controller, Get, Param } from '@nestjs/common'
import { log } from 'console'
import { CarsService } from './cars.service'

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getAllCars() {
    return this.carsService
  }
  @Get(':id')
  async getCarById(@Param('id') id: string) {
    log({ id })
    return this.carsService[id]
  }
}
