import 'reflect-metadata';
import { Container } from 'inversify';
import TYPES from './di.type';
import { ParallaxService } from '../services/parallax.service';

const container = new Container();

container.bind<ParallaxService>(TYPES.ParallaxService)
  .to(ParallaxService)
  .inSingletonScope();

export { container, TYPES };