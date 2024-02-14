"use client"

import { useEffect, useState } from "react"

export default function AuthorSelect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/users');
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderedUsers = data.map(({ username, id }: { username: string; id: number; }) => {
    return (
      <option key={`user_id_${id}`} value={id}>{username}</option>
    )
  })

  return (
    <select autoComplete="on" id="author" name="user_id">
      {renderedUsers}
    </select>
  )
}