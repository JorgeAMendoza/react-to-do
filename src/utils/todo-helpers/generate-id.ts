export const generateTodoID = () => {
  return new Date().getTime() + Math.random();
};
