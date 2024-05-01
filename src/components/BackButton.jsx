'use client';
import { useRouter } from "next/navigation";
import { BackIcon } from "../utils/icons";

export const BackButton = () => {
  const router = useRouter();
  const hasHistory = typeof window !== 'undefined' && window.history.length > 1;
  return (
    <>
      {hasHistory &&
        <BackIcon size={25} onClick={() => router.back()} />}
    </>
  );
};
