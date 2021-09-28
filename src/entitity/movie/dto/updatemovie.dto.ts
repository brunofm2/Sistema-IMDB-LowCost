import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./createmovie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}