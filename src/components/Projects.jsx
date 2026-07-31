export function Projects() {
    return (
        <div className="px-2 mt-4 gap-4 min-h-[80vh]">
            <div className="p-2">
                <h3 className="text-2xl font-semibold inline-block border-b-4 border-gray-200 pb-1">
                    ACADEMIC AND PERSONAL PROJECTS
                </h3>
                    <p className="mt-1 text-gray-500 text-sm">
                        A mix of coursework, self-initiated builds, and things I made just to learn something new.
                    </p>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 rounded-sm">
            
                <div class="w-full border border-gray-200 rounded-sm">
                        {/* SystemName */}
                        <div className="flex">
                            <div class="w-30 flex-none px-2 py-3">
                                <h5 className="text-sm  font-semibold md:text-lg">POS</h5>
                            </div>
                            <div class="flex flex-1 px-2">
                                {/* ApplicationType */}
                                <div className="border-b py-3 border-gray-200">
                                    <h6 className="text-center">Web Application</h6>
                                </div>
                                {/* link */}
                                <div className="flex-1 flex items-start justify-end
                                        border-b text-end border-gray-200 py-2
                                        ">
                                    <a href="#" className="rounded-full py-2 px-2 cursor-pointer hover:bg-black hover:text-white "> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round"
                                                        strokeLinejoin="round" 
                                                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="w-full border border-gray-200 rounded-sm">
                        {/* SystemName */}
                        <div className="flex">
                            <div class="w-30 flex-none px-2 py-3">
                                <h5 className="text-sm  font-semibold md:text-lg">POS</h5>
                            </div>
                            <div class="flex flex-1 px-2">
                                {/* ApplicationType */}
                                <div className="border-b py-3 border-gray-200">
                                    <h6 className="text-center">Web Application</h6>
                                </div>
                                {/* link */}
                                <div className="flex-1 flex items-start justify-end
                                        border-b text-end border-gray-200 py-2
                                        ">
                                    <a href="#" className="rounded-full py-2 px-2 cursor-pointer hover:bg-black hover:text-white "> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round"
                                                        strokeLinejoin="round" 
                                                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                </div>

              
            </div>
            
        </div>
    )
}