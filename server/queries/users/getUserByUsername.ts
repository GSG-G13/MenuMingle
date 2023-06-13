import { Staff, Roles } from '../../models';

const getUserByUsername = async (username: string) => {
  const user = await Staff.findOne({
    where: {
      username,
    },
    include: [
      {
        model: Roles,
        attributes: ['name'],
      },
    ],
  });

  return user;
};

export { getUserByUsername };
