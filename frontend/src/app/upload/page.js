'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'  // Usar el hook useUser para obtener el usuario autenticado

export default function UploadPage() {
  const { user, isLoaded, isSignedIn, getToken } = useUser()  // Obtener el usuario, estado de carga y estado de autenticación
  const [songs, setSongs] = useState([])
  const [form, setForm] = useState({
    title: '',
    artists: '',
    description: '',
    url: ''
  })
  const [selectedId, setSelectedId] = useState(null)
  const [token, setToken] = useState(null)  // Estado para almacenar el token

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchSongs()  // Solo hacer fetch si el usuario está autenticado
    }
  }, [isLoaded, isSignedIn])

  const fetchSongs = async () => {
    if (!user) return  // Verificar si el usuario está disponible

    try {
      const token = await getToken()  // Obtener el token usando getToken()

      // También puedes mostrar el token en la interfaz de usuario
      setToken(token)

      const res = await axios.post('http://localhost:3001/api/songs', {
        headers: {
          Authorization: `Bearer ${token}`  // Usar el token obtenido
        }
      })
      setSongs(res.data)
    } catch (error) {
      console.error('Error al obtener canciones:', error)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!user) return  // Verificar si el usuario está disponible

    try {
      const token = await getToken()  // Obtener el token usando getToken()

      // Mostrar el token en la consola
      console.log("Token obtenido al enviar canción:", token)

      await axios.post('http://localhost:3001/api/songs', form, {
        headers: {
          Authorization: `Bearer ${token}`  // Usar el token obtenido
        }
      })
      setForm({ title: '', artists: '', description: '', url: '' })
      fetchSongs()
    } catch (error) {
      console.error('Error al subir canción:', error)
    }
  }

  const handleUpdate = async () => {
    if (!user) return  // Verificar si el usuario está disponible

    try {
      const token = await getToken()  // Obtener el token usando getToken()

      // Mostrar el token en la consola
      console.log("Token obtenido al actualizar canción:", token)

      await axios.put(`http://localhost:3001/api/songs/${selectedId}`, form, {
        headers: {
          Authorization: `Bearer ${token}`  // Usar el token obtenido
        }
      })
      setForm({ title: '', artists: '', description: '', url: '' })
      setSelectedId(null)
      fetchSongs()
    } catch (error) {
      console.error('Error al actualizar canción:', error)
    }
  }

  const handleDelete = async (id) => {
    if (!user) return  // Verificar si el usuario está disponible

    try {
      const token = await getToken()  // Obtener el token usando getToken()

      // Mostrar el token en la consola
      console.log("Token obtenido al eliminar canción:", token)

      await axios.delete(`http://localhost:3001/api/songs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`  // Usar el token obtenido
        }
      })
      fetchSongs()
    } catch (error) {
      console.error('Error al eliminar canción:', error)
    }
  }

  const handleEdit = (song) => {
    setForm({
      title: song.title,
      artists: song.artists,
      description: song.description,
      url: song.url
    })
    setSelectedId(song._id)
  }

  if (!isLoaded) {
    return <div>Cargando...</div>  // Muestra algo mientras se carga el estado del usuario
  }

  if (!isSignedIn) {
    return <div>No estás autenticado. Por favor inicia sesión.</div>  // Muestra un mensaje si no hay sesión activa
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">🎶 Panel de Administración</h1>

      {/* Mostrar el token en pantalla */}
      {token && (
        <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300">
          <strong>Token de autenticación:</strong> {token}
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">
          {selectedId ? '✏️ Editar Canción' : '➕ Subir Canción'}
        </h2>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="text"
          name="artists"
          value={form.artists}
          onChange={handleChange}
          placeholder="Artistas (separados por coma)"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
          placeholder="URL de la canción"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />

        <div className="flex gap-4">
          {selectedId ? (
            <>
              <button
                onClick={handleUpdate}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-semibold"
              >
                Actualizar
              </button>
              <button
                onClick={() => {
                  setSelectedId(null)
                  setForm({ title: '', artists: '', description: '', url: '' })
                }}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold"
            >
              Subir
            </button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">📃 Canciones Disponibles</h2>
        <ul className="space-y-4">
          {songs.map((song) => (
            <li
              key={song._id}
              className="bg-gray-800 p-4 rounded-lg flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-semibold">{song.title}</h3>
                <p className="text-sm text-gray-300">Artistas: {song.artists}</p>
                <p className="text-sm text-gray-400 mt-1">{song.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(song)}
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(song._id)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
