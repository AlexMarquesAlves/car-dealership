import { Controller, Get } from '@nestjs/common'

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep']
  @Get()
  async getAllCars() {
    return this.cars
  }
}
