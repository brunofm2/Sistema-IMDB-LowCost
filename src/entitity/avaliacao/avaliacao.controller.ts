import { Body, Delete, Get, Param, Patch } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/createavaliacaodto';
import { UpdateAvaliacaoDto } from './dto/updateavaliacaodto';


@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  create(@Body() newAvaliacaoeDto: CreateAvaliacaoDto) {​
      return this.avaliacaoService.createAvalicacao(newAvaliacaoeDto);
  }

 @Get()
 findAll(){
     return this.avaliacaoService.findAll();
 }

 @Get(':id')
 findById(@Param('id') id: string){
    
      return this.avaliacaoService.findById(parseInt(id));
 }

 @Patch(':id')
 update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto){
     return this.avaliacaoService.updateAvaliacao(parseInt(id), updateAvaliacaoDto);
 }

 @Delete(':id')
 remove(@Param('id') id: string){
     return this.avaliacaoService.deleteAvaliacao(parseInt(id));
 }
 
}
