import { useLayoutEffect, useState } from "react";

export default function useWindow() {
  const [attr, setAttr] = useState(null);
  useLayoutEffect(() => {
    const { innerWidth, innerHeight } = window;
    setAttr({ innerWidth, innerHeight });
  }, []);
  return attr;
}
