import { useState, useEffect } from "react";

const UserCount = () => {
  const [userCount, setUserCount] = useState<string>("0");

  useEffect(() => {
    const getUserCount = async () => {
      const users = 20000; //TODO: Fetch real number
      return users.toLocaleString();
    };

    const fetchCount = async () => {
      const userCount = await getUserCount();
      setUserCount(userCount);
    };

    fetchCount();
  }, []);

  return <span>{userCount}</span>;
};
export default UserCount;
