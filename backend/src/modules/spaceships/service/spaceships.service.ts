import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApiException } from '../../../common/types/api-exception.type';
import { API_ERRORS } from '../../../constant/api-errors.constant';
import { CreateSpaceShipDto } from '../dto/create-spaceship.dto';
import { Spaceship } from '../interface/spaceship.interface';

@Injectable()
export class SpaceshipsService {
  constructor(
    @Inject('SPACESHIP_MODEL')
    private readonly model: Model<Spaceship>,
  ) { }

  async create(data: CreateSpaceShipDto): Promise<Spaceship> {
    const sameName = await this.findByName(data.name);

    if (sameName) {
      throw new ApiException(API_ERRORS.SPACESHIP_EXISTS);
    }

    const created = new this.model(data);
    return created.save();
  }

  async findAll(): Promise<Spaceship[]> {
    return this.model.find({ deletedAt: null }).exec();
  }

  async findById(id: string): Promise<Spaceship> {
    return this.model.findById(id, { deletedAt: null }).exec();
  }

  async findByName(name: string): Promise<Spaceship> {
    return this.model.findOne({ name, deletedAt: null }).exec();
  }

  async update(id: string, data: CreateSpaceShipDto): Promise<Spaceship> {
    const find = await this.findById(id);

    if (!find) {
      throw new ApiException(API_ERRORS.SPACESHIP_NOT_FOUND);
    }

    const sameName = await this.findByName(data.name);

    if (sameName) {
      throw new ApiException(API_ERRORS.SPACESHIP_EXISTS);
    }

    find.name = data.name;
    find.speed = data.speed;

    return find.save();
  }

}
