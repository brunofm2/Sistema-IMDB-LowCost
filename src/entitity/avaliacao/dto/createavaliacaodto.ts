import { IsString, IsNumber } from 'class-validator';

export class CreateAvaliacaoDto {

  @IsString()
  nomeFilme: string;

  @IsNumber()
  nota: number;

  @IsNumber()
  movieId: number;

}