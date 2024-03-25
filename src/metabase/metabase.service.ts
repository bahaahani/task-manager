import { Injectable } from '@nestjs/common';
import { CreateMetabaseDto } from './dto/create-metabase.dto';
import { UpdateMetabaseDto } from './dto/update-metabase.dto';

@Injectable()
export class MetabaseService {
  create(createMetabaseDto: CreateMetabaseDto) {
    return 'This action adds a new metabase';
  }

  findAll() {
    return `This action returns all metabase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metabase`;
  }

  update(id: number, updateMetabaseDto: UpdateMetabaseDto) {
    return `This action updates a #${id} metabase`;
  }

  remove(id: number) {
    return `This action removes a #${id} metabase`;
  }
}
