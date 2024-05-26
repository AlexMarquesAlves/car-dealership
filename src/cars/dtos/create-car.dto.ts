import { IsString } from 'class-validator'

export class CreateCarDto {
  constructor() {}

  @IsString()
  readonly brand: string

  @IsString()
  readonly model: string
}
