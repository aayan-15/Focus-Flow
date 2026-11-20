import { ArrowRight } from 'lucide-react'

const CTA = () => {
    return (
        <section className="bg-white py-24">

            <div className="mx-auto max-w-5xl px-6">

                <div className="overflow-hidden rounded-3xl bg-slate-100 px-6 py-16 text-center sm:px-12">

                    <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        Ready to get focused?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
                        Bring your tasks, projects and goals together and start
                        making progress.
                    </p>

                    <a

                        className="group mt-8 cursor-pointer inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        Start using FocusFlow

                        <ArrowRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>

                </div>

            </div>

        </section>
    )
}

export default CTA