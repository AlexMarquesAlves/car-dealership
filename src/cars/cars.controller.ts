import { Controller, Get, Param } from '@nestjs/common'
import { log } from 'console'

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep']

  @Get()
  async getAllCars() {
    return this.cars
  }
  @Get(':id')
  async getCarById(@Param('id') id: string) {
    log(id)
    return this.cars[id]
  }
}
