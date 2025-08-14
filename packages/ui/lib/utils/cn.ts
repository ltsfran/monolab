import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const borderWidths = ['none', 'thin', 'regular', 'medium']

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'small',
        'medium',
        'large',
        'label-small-moderate',
        'label-medium-moderate',
        'label-large-moderate',
        'label-specific-small-moderate'
      ],
      radius: ['none', 'small', 'medium', 'large']
    },
    classGroups: {
      'border-w': [{ border: borderWidths }],
      'border-w-x': [{ 'border-x': borderWidths }],
      'border-w-y': [{ 'border-y': borderWidths }],
      'border-w-t': [{ 'border-t': borderWidths }],
      'border-w-r': [{ 'border-r': borderWidths }],
      'border-w-b': [{ 'border-b': borderWidths }],
      'border-w-l': [{ 'border-l': borderWidths }],
      'border-w-s': [{ 'border-s': borderWidths }],
      'border-w-e': [{ 'border-e': borderWidths }],
      'divide-x': [{ 'divide-x': borderWidths }],
      'divide-y': [{ 'divide-y': borderWidths }],
      'ring-w': [{ ring: borderWidths }],
      'outline-w': [{ outline: borderWidths }],
      'inset-ring-w': [{ 'inset-ring': borderWidths }]
    }
  },
  prefix: 'y'
})

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
