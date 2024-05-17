import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
  async getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id })
    return this.carsService.findOneById(id)
  }

  @Post()
  async createCar(@Body() body) {
    console.log()
    return { body }
  }

  @Patch(':id')
  async updateCar(@Param('id', ParseIntPipe) id: number, @Body() body) {
    console.log()
    return { body }
  }

  @Delete(':id')
  async deleteCar(@Param('id', ParseIntPipe) id: number) {
    console.log()
    return { id }
  }
}
