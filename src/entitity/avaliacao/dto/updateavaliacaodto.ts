import { PartialType } from "@nestjs/mapped-types";
import { CreateAvaliacaoDto } from "./createavaliacaodto";

export class UpdateAvaliacaoDto extends PartialType(CreateAvaliacaoDto) {}