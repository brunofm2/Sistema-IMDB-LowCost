import { Body, Delete, Get, Patch } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/createmovie.dto';
import { Param } from '@nestjs/common';
import { UpdateMovieDto } from './dto/updatemovie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  create(@Body() newMovieDto: CreateMovieDto) {​
      return this.movieService.createMovie(newMovieDto);
  }

 @Get()
 findAll(){
     return this.movieService.findAll();
 }

 @Get(':id')
 findById(@Param('id') id: string){
    console.log(id);
      return this.movieService.findById(parseInt(id));
 }

 @Patch(':id')
 update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto){
     return this.movieService.updateMovie(parseInt(id), updateMovieDto);
 }

 @Delete(':id')
 remove(@Param('id') id: string){
     return this.movieService.deleteMovie(parseInt(id));
 }
 
}
