import { sortOptions } from "../State/State";

const isIncluded = (input) => (item) =>
  item.title.toLowerCase().includes(input.toLowerCase());

const sortByOption = (option, array) => {
  switch (option) {
    case sortOptions.DSC_TITLE:
      return [...array].sort((firstElement, secondElement) =>
        firstElement.title > secondElement.title ? -1 : 1
      );
    case sortOptions.ASC_TITLE:
      return [...array].sort((firstElement, secondElement) =>
        firstElement.title < secondElement.title ? -1 : 1
      );
    case sortOptions.DSC_YEAR:
      return [...array].sort(
        (firstElement, secondElement) =>
          -(firstElement.releaseYear - secondElement.releaseYear)
      );

    case sortOptions.ASC_YEAR:
      return [...array].sort(
        (firstElement, secondElement) =>
          firstElement.releaseYear - secondElement.releaseYear
      );
  }
};

export function renderedData(data, input, sortOption) {
  let filteredData = data.filter(isIncluded(input));
  let finalData = sortByOption(sortOption, filteredData);
  return finalData.slice(0, 21);
}
