import { Injectable, NotFoundException } from '@nestjs/common'
import { Car } from './interfaces/car.interface'

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  async findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id)

    if (!car) {
      throw new NotFoundException(
        `the car with ID '${id}' not found on database`,
      )
    }

    return [car]
  }
}
