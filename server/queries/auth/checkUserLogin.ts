import Staff from '../../models/staff';

export const checkUserLogin = async (username: string) => {
  const user = await Staff.findOne({
    where: {
      username,
    },
  });

  return user;
};
