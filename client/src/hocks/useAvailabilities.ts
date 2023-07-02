function useAvailabilities() {
  //! TODO -> Fetch this data from backend
  const availabilities = [
    {
      status: 'available',
      value: true,
    },
    {
      status: 'notAvailable',
      value: false,
    },
  ];
  return availabilities;
}

export default useAvailabilities;
