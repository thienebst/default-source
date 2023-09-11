import { DeepPartial, Repository } from 'typeorm';
import { BaseEntity } from './base-entity';

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
    const [data, total] = await this.repository.findAndCount();
    return { data, total };
  }

  async findOne(params) {
    return this.repository.findOneBy(params);
  }
  async update(id: number, updateData: UpdateDto) {
    return this.repository.save({
      ...updateData,
      id: Number(id),
    });
  }

  async remove(id: number) {
    return this.repository.delete(id);
  }
}
