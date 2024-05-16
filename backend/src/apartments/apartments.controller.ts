import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { GetApartmentsDto } from './dto/get-apartments.dto';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Post()
  async create(@Body() createApartmentDto: CreateApartmentDto) {
    return await this.apartmentsService.create(createApartmentDto);
  }

  @Get()
  async findAll(@Query() query: GetApartmentsDto) {
    return await this.apartmentsService.findAll(query.rooms, query.price);
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return await this.apartmentsService.findOne(uuid);
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
