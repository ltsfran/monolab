import { cn } from '@/utils'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface ButtonOptions extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean
  /** What background color to use */
  backgroundColor?: string
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large'
}

type ButtonProps = PropsWithChildren<ButtonOptions>

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor = undefined,
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        'inline-block table-auto cursor-pointer rounded-[3rem] border-0 leading-[1] font-bold',
        {
          'bg-[#555ab9] text-white': primary,
          'bg-transparent text-[#333] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]':
            !primary,
          'px-4 py-2.5 text-[12px] leading-3.5': size === 'small',
          'px-5 py-[11px] text-[14px] leading-4': size === 'medium',
          'px-6 py-3 text-base': size === 'large'
        }
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {children}
    </button>
  )
}
