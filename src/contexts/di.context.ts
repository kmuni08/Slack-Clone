import { createContext } from 'react';
import { Container } from 'inversify';

export const DIContext = createContext<Container | null>(null);