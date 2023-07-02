const useCategories = () => {
  //! TODO -> Fetch this data from backend
  const categories = [
    {
      id: 1,
      value: 'Drinks',
    },
    {
      id: 2,

      value: 'Appetizers',
    },
    {
      id: 3,

      value: 'Main Course',
    },
    {
      id: 4,
      value: 'Desserts',
    },
    {
      id: 5,
      value: 'Salads',
    },
  ];
  return categories;
};

export default useCategories;
