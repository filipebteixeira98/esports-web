import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'

import { Input } from './Form/Input'

export function CreateAdModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Post an advertisement
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Which game?
            </label>
            <Input id="game" placeholder="Select the game you want to play" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Your name (or nickname)</label>
            <Input
              name="name"
              placeholder="What do they call you in the game?"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">
                How many years have you been playing?
              </label>
              <Input
                id="yearsPlaying"
                type="number"
                placeholder="It's okay to be zero"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">What's your discord account?</label>
              <Input id="discord" type="text" placeholder="User#0000" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">When do you usually play?</label>
              <div className="grid grid-cols-4 gap-2">
                <button title="Sunday" className="w-8 h-8 rounded bg-zinc-900">
                  S
                </button>
                <button title="Monday" className="w-8 h-8 rounded bg-zinc-900">
                  M
                </button>
                <button title="Tuesday" className="w-8 h-8 rounded bg-zinc-900">
                  T
                </button>
                <button
                  title="Wednesday"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  W
                </button>
                <button
                  title="Thursday"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  T
                </button>
                <button title="Friday" className="w-8 h-8 rounded bg-zinc-900">
                  F
                </button>
                <button
                  title="Saturday"
                  className="w-8 h-8 rounded bg-zinc-900"
                >
                  S
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">What time of day?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="From" />
                <Input id="hourEnd" type="time" placeholder="to" />
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-2 text-sm">
            <Input type="checkbox" />I usually connect to voice chat
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancel
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController className="w-6 h-6" />
              Find duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
