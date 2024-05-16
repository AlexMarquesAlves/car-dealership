import { Injectable, Param } from '@nestjs/common'

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Wrangler',
    },
  ]

  async findAll() {
    return this.cars
  }

  async findOneById(@Param('cars') cars) {
    return this.cars[cars].id
  }
}
