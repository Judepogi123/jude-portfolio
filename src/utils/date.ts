export const getExperience = (value: string) => {
  try {
    const temp = value.split(":");
    if (temp[1] === "1") {
      if (parseInt(temp[0]) > 1) {
        return `${temp[0]} Years`;
      }
      return `${temp[0]} Year`;
    }
    if (parseInt(temp[0]) > 1) {
        return `${temp[0]} Months`;
      }
    return `${temp[0]} Month`;
  } catch (error) {
    console.log(error);
    throw new Error(`${error}`);
  }
};
