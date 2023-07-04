function useAvailabilities() {
  //! TODO -> Fetch this data from backend
  const availabilities = [
    {
      key: 1,
      status: 'available',
      value: true,
    },
    {
      key: 2,
      status: 'notAvailable',
      value: false,
    },
  ];
  return availabilities;
}

export default useAvailabilities;
