const UserCount = () => {
  const getUserCount = () => {
    const users = 20000;
    return users.toLocaleString();
  };

  const userCount = getUserCount();
  return <span>{userCount}</span>;
};
export default UserCount;
