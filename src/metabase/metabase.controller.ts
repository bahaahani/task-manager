import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetabaseService } from './metabase.service';
import { CreateMetabaseDto } from './dto/create-metabase.dto';
import { UpdateMetabaseDto } from './dto/update-metabase.dto';

@Controller('metabase')
export class MetabaseController {
  constructor(private readonly metabaseService: MetabaseService) {}

  @Post()
  create(@Body() createMetabaseDto: CreateMetabaseDto) {
    return this.metabaseService.create(createMetabaseDto);
  }

  @Get()
  findAll() {
    return this.metabaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metabaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetabaseDto: UpdateMetabaseDto) {
    return this.metabaseService.update(+id, updateMetabaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metabaseService.remove(+id);
  }
}
