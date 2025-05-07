"use client";

import { useRouter, usePathname } from "next/navigation";
import Combobox from "@/components/ComboBox";
import { projects } from "@/lib/constants";

const SelectProject = () => {
  const router = useRouter();
  const pathName = usePathname();

  const initialValue = pathName === "/" ? "" : pathName;

  return (
    <Combobox
      handleValueChange={(value) => {
        if (value) router.push(value);
        else router.push("/");
      }}
      currentVal={initialValue}
      options={projects}
      placeholder="Projects"
    />
  );
};

export default SelectProject;
