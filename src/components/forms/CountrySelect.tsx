"use client"

import { useEffect, useState } from "react"

export default function CountrySelect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/countries');
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderedCountries = data.map(({ country, id }: { country: string; id: number; }) => {
    return (
      <option key={`country_id_${id}`} value={id}>{country}</option>
    )
  })

  return (
    <select autoComplete="on" id="country" name="country_id">
      {renderedCountries}
    </select>
  )
}