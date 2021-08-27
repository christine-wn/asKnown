import mitt, { Emitter } from 'mitt';
import { Events } from './types'

const emitter: Emitter<Events>= mitt<Events>();
export default emitter;