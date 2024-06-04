const ChangeHandler = (Data, setData, deleted) => {
  const tempData = [...Data];
  const index = tempData.findIndex((element) => element.id === deleted);
  if (index !== -1) {
    tempData.splice(index, 1);
  }
  setData(tempData);
  return null;
};
export default ChangeHandler;
