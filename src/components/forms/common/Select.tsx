"use child"

import { useEffect, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  defaultValue: string;
  name: string;
}

export default function Select({ defaultValue, name }: SelectProps) {
  const [options, setOptions] = useState<Option[]>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedOptions = await fetchOptions();
  //     setOptions(fetchedOptions);
  //   };

  //   fetchData();
  // }, []);

  return (
    <select name={name}>{name}</select>
  )
}