import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { Apartment } from './entities/apartment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment) private apartmentRepo: Repository<Apartment>,
  ) {}

  async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    const apartment = this.apartmentRepo.create(createApartmentDto);
    return await this.apartmentRepo.save(apartment);
  }

  async findAll() {
    const apartments = await this.apartmentRepo.query('SELECT * from apartment');
    return apartments;
  }

  async findOne(id: string): Promise<Apartment[]> {
    const apartment = await this.apartmentRepo.findBy({ id: id });
    return apartment;
  }

  async update(id: string, updateApartmentDto: UpdateApartmentDto): Promise<Apartment[]> {
    await this.apartmentRepo.update(id, updateApartmentDto);
    const apartment = await this.apartmentRepo.findBy({ id: id });
    return apartment;
  }

  async remove(id: string): Promise<Apartment[]> {
    const apartment = await this.apartmentRepo.findBy({ id: id });
    return await this.apartmentRepo.remove(apartment);
  }
}
