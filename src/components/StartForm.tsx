'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'

interface formData {
  skill1: string
  skill1Level: string
  skill2: string
  skill2Level: string
  skill3: string
  skill3Level: string
}

const initialState: formData = {
  skill1: '',
  skill1Level: '',
  skill2: '',
  skill2Level: '',
  skill3: '',
  skill3Level: ''
}
const StartForm = () => {
  const [formState, setFormState] = useState<formData>(initialState)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (event: FormEvent) => {
    // TODO
  }

  return <div>StartForm</div>
}

export default StartForm
