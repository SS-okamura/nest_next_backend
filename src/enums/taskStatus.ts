export enum TaskStatus {
  waiting = 'waiting',
  running = 'running',
  done = 'done',
}

/**
 * @returns taskの初期値のstatus
 */
export const defaultStatus = () => {
  return TaskStatus.waiting;
};
