import { ArrowRight, Play } from 'lucide-react'
import './nav.css';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-36 pb-20 hahi">

            {/* Background decoration */}
            <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />

                        <span className="text-sm font-medium text-slate-600">
                            Your productivity, organized
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                        Turn your plans
                        <br />
                        into <span className="text-slate-500">progress.</span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                        FocusFlow brings your tasks, projects, deadlines and
                        productivity insights together in one simple workspace.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <a

                            className="group cursor-pointer flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-700"
                        >
                            Get started for free

                            <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#features"
                            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                        >
                            <Play size={15} />
                            Explore features
                        </a>

                    </div>

                </div>

                {/* Dashboard preview */}
                <div className="relative mx-auto mt-20 max-w-6xl">

                    <div className="absolute -inset-4 -z-10 rounded-3xl bg-slate-300/30 blur-2xl" />

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">

                        {/* Browser top */}
                        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3">

                            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                            <div className="ml-4 flex-1 rounded-md bg-white px-4 py-1.5 text-xs text-slate-400">
                                app.focusflow.dev/dashboard
                            </div>

                        </div>

                        {/* Fake dashboard */}
                        <div className="flex min-h-[420px]">

                            {/* Sidebar */}
                            <div className="hidden w-52 border-r border-slate-200 bg-slate-50 p-5 sm:block">

                                <div className="mb-8 flex items-center gap-2">
                                    <div className="h-7 w-7 rounded-lg bg-slate-900" />
                                    <div className="h-4 w-20 rounded bg-slate-200" />
                                </div>

                                <div className="space-y-3">
                                    <div className="h-9 rounded-lg bg-slate-200" />
                                    <div className="h-8 w-4/5 rounded-lg bg-slate-100" />
                                    <div className="h-8 w-4/5 rounded-lg bg-slate-100" />
                                    <div className="h-8 w-4/5 rounded-lg bg-slate-100" />
                                </div>

                            </div>

                            {/* Main dashboard */}
                            <div className="flex-1 p-6 sm:p-8">

                                <div className="mb-8">
                                    <div className="h-5 w-40 rounded bg-slate-200" />
                                    <div className="mt-3 h-3 w-64 rounded bg-slate-100" />
                                </div>

                                {/* Stats */}
                                <div className="grid gap-4 sm:grid-cols-3">

                                    <div className="rounded-xl border border-slate-200 p-5">
                                        <div className="h-3 w-20 rounded bg-slate-100" />
                                        <div className="mt-4 h-7 w-14 rounded bg-slate-200" />
                                    </div>

                                    <div className="rounded-xl border border-slate-200 p-5">
                                        <div className="h-3 w-20 rounded bg-slate-100" />
                                        <div className="mt-4 h-7 w-14 rounded bg-slate-200" />
                                    </div>

                                    <div className="rounded-xl border border-slate-200 p-5">
                                        <div className="h-3 w-20 rounded bg-slate-100" />
                                        <div className="mt-4 h-7 w-14 rounded bg-slate-200" />
                                    </div>

                                </div>

                                {/* Lower section */}
                                <div className="mt-5 grid gap-5 lg:grid-cols-2">

                                    <div className="rounded-xl border border-slate-200 p-5">
                                        <div className="mb-5 h-4 w-28 rounded bg-slate-100" />

                                        <div className="space-y-4">

                                            <div className="flex items-center gap-3">
                                                <div className="h-4 w-4 rounded border border-slate-300" />
                                                <div className="h-3 w-40 rounded bg-slate-100" />
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="h-4 w-4 rounded border border-slate-300" />
                                                <div className="h-3 w-32 rounded bg-slate-100" />
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="h-4 w-4 rounded border border-slate-300" />
                                                <div className="h-3 w-44 rounded bg-slate-100" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 p-5">
                                        <div className="mb-5 h-4 w-32 rounded bg-slate-100" />

                                        <div className="flex h-32 items-end gap-3">

                                            <div className="h-[40%] flex-1 rounded-t bg-slate-200" />
                                            <div className="h-[65%] flex-1 rounded-t bg-slate-300" />
                                            <div className="h-[50%] flex-1 rounded-t bg-slate-200" />
                                            <div className="h-[80%] flex-1 rounded-t bg-slate-300" />
                                            <div className="h-[60%] flex-1 rounded-t bg-slate-200" />
                                            <div className="h-[90%] flex-1 rounded-t bg-slate-300" />
                                            <div className="h-[70%] flex-1 rounded-t bg-slate-200" />

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero