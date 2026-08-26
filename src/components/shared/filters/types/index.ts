enum SortBy {
  ASC = 'asc',
  DESC = 'desc',
}

interface IFilters {
  sort: SortBy;
}

export { SortBy, type IFilters };
