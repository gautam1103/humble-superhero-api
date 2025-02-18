import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { Superhero } from './superhero.model';


@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(
    @Body('name') name: string,
    @Body('superpower') superpower: string,
    @Body('humilityScore') humilityScore: number,
  ) {
    return this.superheroesService.addSuperhero(name, superpower, humilityScore);
  }

  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }
}
