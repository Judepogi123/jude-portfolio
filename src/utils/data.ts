export const handleOpenModalType = (value: string, type: 0 | 1 | 2) => {
  if (value === undefined) return;
  const temp = value.split(":");

  if (type === 2) {
    return temp[type];
  }
  if (temp[type] === "1") {
    return temp[type];
  }
  return false;
};
