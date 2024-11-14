export const validateSession = (
  user: { uid: string; email: string } | undefined,
): boolean => {
  if (!user) {
    return false;
  }

  const isUserValid = /eksternalfour/.test(user.email);

  if (!isUserValid) {
    return false;
  }

  return true;
};
