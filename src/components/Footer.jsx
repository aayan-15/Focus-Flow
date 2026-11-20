import { CheckCircle2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900">
            <CheckCircle2 size={17} className="text-white" />
          </div>

          <span className="font-bold text-slate-900">
            FocusFlow
          </span>

        </div>

        <p className="text-sm text-slate-500">
          © 2026 FocusFlow. Built with React.
        </p>

      </div>

    </footer>
  )
}

export default Footer