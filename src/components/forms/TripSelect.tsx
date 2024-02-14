"use client"

import { useEffect, useState } from "react"

export default function TripSelect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/trips');
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderedTrips = data.map(({ trip, id }: { trip: string; id: number; }) => {
    return (
      <option key={`trip_id_${id}`} value={id}>{trip}</option>
    )
  })

  return (
    <select autoComplete="on" id="trips" name="trip_id">
      {renderedTrips}
    </select>
  )
}