import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createApartmentDto: CreateApartmentDto) {
    return await this.apartmentsService.create(createApartmentDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.apartmentsService.findOne(id);
  }

  @Get()
  async findAll() {
    return await this.apartmentsService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateApartmentDto: UpdateApartmentDto,
  ) {
    return await this.apartmentsService.update(id, updateApartmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const apartment = await this.apartmentsService.remove(id);
    if (!apartment) return new NotFoundException();
    return apartment;
  }
}
