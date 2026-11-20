const steps = [
  {
    number: '01',
    title: 'Create your workspace',
    description:
      'Set up your workspace and organize everything you are working on.',
  },
  {
    number: '02',
    title: 'Plan your work',
    description:
      'Break projects into tasks, set priorities and assign deadlines.',
  },
  {
    number: '03',
    title: 'Track your progress',
    description:
      'Use your dashboard and analytics to understand how much you are getting done.',
  },
]

const HowitWorks = () => {
  return (
    <section id="how-it-works" className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Heading */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Simple enough to use.
              <br />
              Powerful enough to matter.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              FocusFlow keeps the workflow simple so you can spend less
              time managing your productivity system and more time actually
              getting things done.
            </p>

          </div>

          {/* Steps */}
          <div className="space-y-10">

            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 border-b border-slate-800 pb-10 last:border-0"
              >

                <span className="text-sm font-bold text-slate-500">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default HowitWorks