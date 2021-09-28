import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {

  @IsString()
  nome: string;

  @IsNumber()
  media: number;

  @IsNumber()
  soma: number;

  @IsNumber()
  quantidadeMedias: number;

}