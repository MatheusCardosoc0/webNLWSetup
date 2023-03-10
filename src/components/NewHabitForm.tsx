import { Check } from 'phosphor-react'
import React from 'react'

const NewHabitForm = () => {
  return (
    <form className='w-full flex flex-col mt-6'>
      <label htmlFor='title'>
        Qual seu compromentimento
      </label>

      <input
        type={"text"}
        id="title"
        placeholder='ex.: Exercìcios, dormir bem, etc...'
        className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400'
        autoFocus
      />

      <label htmlFor='' className='font-semibold leading-tight mt-4'>
        Qual a recorrência?
      </label>

      <button type='submit' className='mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600'>
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}

export default NewHabitForm