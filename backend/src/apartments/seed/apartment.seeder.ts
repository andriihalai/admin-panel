import { InjectRepository } from '@nestjs/typeorm';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { Apartment } from '../entities/apartment.entity';
import { Repository } from 'typeorm';

export class ApartmentSeeder implements Seeder {
  constructor(
    @InjectRepository(Apartment) private apartmentRepo: Repository<Apartment>,
  ) {}

  async seed(): Promise<any> {
    const apartments = DataFactory.createForClass(Apartment).generate(15);
    return await this.apartmentRepo.insert(apartments);
  }
  async drop(): Promise<any> {
    return await this.apartmentRepo.delete({});
  }
}
