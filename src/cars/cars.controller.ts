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
import { CreateCarDto } from './dtos/create-car.dto'

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
  async createCar(@Body() createCarDto: CreateCarDto) {
    console.log()
    return { createCarDto }
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
