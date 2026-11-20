
import React, { useState } from 'react'
import { Link,NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden p-4">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg"
        >
          Open Menu
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          bg-white dark:bg-neutral-800
          border-r border-gray-200 dark:border-neutral-700
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">

          {/* Header */}
          <header className="p-4 flex justify-between items-center">

            <Link
              to="/"
              className="font-semibold text-xl text-gray-800 dark:text-white"
            >
              Focus Flow
            </Link>

            {/* Mobile Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              aria-label="Close navigation"
            >
              ✕
            </button>

          </header>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-2 py-2">

            <ul className="space-y-1">

              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 text-gray-800 dark:text-neutral-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700"
                >
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <path d="M9 22V12h6v10" />
                  </svg>
                  Home
                </Link>
              </li>

              <li>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${isActive
                      ? 'bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-white'
                      : 'flex items-center gap-3 py-2 px-3 text-gray-800 dark:text-neutral-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700'
                    }`
                  }
                >
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${isActive
                      ? 'bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-white'
                      : 'flex items-center gap-3 py-2 px-3 text-gray-800 dark:text-neutral-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700'
                    }`
                  }
                >
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tasks"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${isActive
                      ? 'bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-white'
                      : 'flex items-center gap-3 py-2 px-3 text-gray-800 dark:text-neutral-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700'
                    }`
                  }
                >
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Tasks
                </NavLink>
              </li>

            </ul>

          </nav>

        </div>
      </aside>
    </>
  )
}

export default Sidebar
