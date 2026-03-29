import useQueryParams from '@/hooks/useQueryParams';

const useArrowBtnActions = (page: number, totalPages: number) => {
  const setQueryParams = useQueryParams();

  const createPageURL = (pageNumber: number) => {
    setQueryParams({ page: String(pageNumber) });
  };

  const increment = () => {
    if (page < totalPages) {
      createPageURL(page + 1);
    }
  };

  const decrement = () => {
    if (page > 1) {
      createPageURL(page - 1);
    }
  };

  return {
    increment,
    decrement,
    createPageURL,
    setQueryParams,
  };
};

export default useArrowBtnActions;
