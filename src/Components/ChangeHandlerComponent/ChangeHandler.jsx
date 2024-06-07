const ChangeHandler = (Data,deleted) => {
  return  Data.filter((element) => element.id !== deleted);
};
export default ChangeHandler;
