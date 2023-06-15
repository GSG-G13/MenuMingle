import { Staff, Role } from '../../models';

const getUserByUsername = async (username: string) => {
  const user = await Staff.findOne({
    where: {
      username,
    },
    include: [
      {
        model: Role,
        attributes: ['name'],
      },
    ],
  });

  return user;
};

export { getUserByUsername };
