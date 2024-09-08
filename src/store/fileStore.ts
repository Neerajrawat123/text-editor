
import { create } from 'zustand'
import { findFile } from '../utils/findFile'
import { files } from '../utils/data'

export const useFileStore = create((set) => ({
  fileId: null,
  setId: (NewId: string) => set({ fileId: NewId }),
  file: null,
  setFile: (newId) => {
    let file = findFile(files, newId)
    if (!file.isDirectory) {

      return set({ file: file })
    }

  }
}))
