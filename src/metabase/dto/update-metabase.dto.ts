import { PartialType } from '@nestjs/mapped-types';
import { CreateMetabaseDto } from './create-metabase.dto';

export class UpdateMetabaseDto extends PartialType(CreateMetabaseDto) {}
