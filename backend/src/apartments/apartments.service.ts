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

  async findAll(roomsCount: number, price: 'asc' | 'desc') {
    let apartments: Apartment[] = await this.apartmentRepo.query(
      'SELECT * from apartment',
    );

    if (roomsCount) {
      apartments = apartments.filter(
        (apartment) => apartment.rooms === roomsCount,
      );
    }

    if (price === 'asc') {
      apartments = apartments.sort((a, b) => a.price - b.price);
    } else if (price === 'desc') {
      apartments = apartments = apartments.sort((a, b) => b.price - a.price);
    }

    return apartments;
  }

  async findApartmentsByRooms(roomsAmount: number): Promise<Apartment[]> {
    const apartments = await this.apartmentRepo.findBy({ rooms: roomsAmount });
    return apartments;
  }

  async sortApartmentsByPrice(apartments: Apartment[]) {
    return apartments.sort((a, b) => a.price - b.price);
  }

  async findOne(uuid: string): Promise<Apartment[]> {
    const apartment = await this.apartmentRepo.findBy({ id: uuid });
    return apartment;
  }

  async update(
    id: string,
    updateApartmentDto: UpdateApartmentDto,
  ): Promise<Apartment[]> {
    await this.apartmentRepo.update(id, updateApartmentDto);
    const apartment = await this.apartmentRepo.findBy({ id: id });
    return apartment;
  }

  async remove(id: string): Promise<Apartment[]> {
    const apartment = await this.apartmentRepo.findBy({ id: id });
    return await this.apartmentRepo.remove(apartment);
  }
}
