import { Injectable } from '@nestjs/common';
import { CreateMetabaseDto } from './dto/create-metabase.dto';
import { UpdateMetabaseDto } from './dto/update-metabase.dto';

@Injectable()
export class MetabaseService {
  create(createMetabaseDto: CreateMetabaseDto) {
    return 'This action adds a new metabase';
  }


}
