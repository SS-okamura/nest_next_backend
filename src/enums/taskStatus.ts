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

export const getTaskStatusFromString = (statusString: string) => {
  // Enumの値を調べる
  const statusValues = Object.values(TaskStatus) as string[];

  // 文字列がEnumに存在するか確認
  if (statusValues.includes(statusString)) {
    return statusString as TaskStatus;
  } else {
    // 存在しない場合はundefinedを返す
    return undefined;
  }
};
