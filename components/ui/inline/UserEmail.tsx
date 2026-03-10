"use client";

import { useAuthSession } from "@/context/AuthSessionContext";

export const UserEmail = () => {
  const { email } = useAuthSession();

  return <p className="text-sm text-(--faded-gray)">{email}</p>;
};
