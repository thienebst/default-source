import { HttpException, HttpStatus } from '@nestjs/common';
import { Catch } from '@nestjs/common/decorators';
import {
  DeepPartial,
  EntityNotFoundError,
  QueryFailedError,
  Repository,
} from 'typeorm';
import { BaseEntity } from './base-entity';
@Catch(QueryFailedError, EntityNotFoundError)
export class BaseCrudService<
  Entity extends BaseEntity,
  CreateDto extends DeepPartial<Entity>,
  UpdateDto extends DeepPartial<Entity>,
> {
  constructor(public repository: Repository<Entity>) {}

  async create(createUserDto: CreateDto) {
    return this.repository.save({
      ...createUserDto,
    });
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(params) {
    return this.repository.findOneBy(params);
  }

  async update(id: number, updateUserDto: UpdateDto) {
    return this.repository.save({ id, ...updateUserDto });
  }

  async remove(id: number) {
    return this.repository.delete(id);
  }
}
