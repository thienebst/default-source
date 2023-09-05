import { DeepPartial, Repository } from 'typeorm';
import { BaseEntity } from './base-entity';

export class BaseCrudService<
  Entity extends BaseEntity,
  CreateDto extends DeepPartial<Entity>,
  UpdateDto extends DeepPartial<Entity>,
> {
  constructor(public repository: Repository<Entity>) {}

  create(createUserDto: CreateDto) {
    return this.repository.save({
      ...createUserDto,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(params) {
    return this.repository.findOneBy(params);
  }

  update(id: number, updateUserDto: UpdateDto) {
    return this.repository.save({ id, ...updateUserDto });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
