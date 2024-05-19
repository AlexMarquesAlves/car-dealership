import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common'
import { CarsService } from './cars.service'

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  async getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id })
    return this.carsService.findOneById(id)
  }

  @Post()
  async createCar(@Body() body) {
    console.log()
    return { body }
  }

  @Patch(':id')
  async updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body) {
    console.log()
    return { body }
  }

  @Delete(':id')
  async deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    console.log()
    return { id }
  }
}
