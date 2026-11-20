import {
  CheckSquare,
  BarChart3,
  CalendarDays,
  FolderKanban,
  Search,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: CheckSquare,
    title: 'Smart task management',
    description:
      'Create, organize, prioritize and complete tasks without losing track of what matters.',
  },
  {
    icon: FolderKanban,
    title: 'Project organization',
    description:
      'Keep your projects structured with clear progress tracking and project-specific tasks.',
  },
  {
    icon: CalendarDays,
    title: 'Plan your schedule',
    description:
      'See upcoming deadlines and organize your workload with a simple calendar view.',
  },
  {
    icon: BarChart3,
    title: 'Productivity analytics',
    description:
      'Understand your work patterns with clear visual insights and productivity statistics.',
  },
  {
    icon: Search,
    title: 'Find anything quickly',
    description:
      'Search through your tasks and projects instantly instead of digging through menus.',
  },
  {
    icon: Zap,
    title: 'Built for focus',
    description:
      'A clean interface designed to reduce friction and help you spend more time doing.',
  },
]

const Features = () => {
  return (
    <section id="features" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Everything in one place
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Everything you need to stay focused
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            FocusFlow gives you the tools to plan your work, track your
            progress and stay organized.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Features