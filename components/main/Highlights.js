import React from 'react'



const Highlights = () => {
    return (
        <section className='w-full h-auto min-h-[70vh] bg-[#121212] py-16'>
            <h2 className="text-center text-3xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-[#ffe100] via-[#e9c960] to-[#f2ebcd] bg-clip-text text-transparent">

                SIX REASONS TO STAY

            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-md">
                <div className="p-6 rounded-2xl  ">
                    <h3 className="text-xl font-semibold mb-2 text-[#ffe100] md:text-3xl lg:text-4xl">Fine Dining </h3>
                    <p className="text-white">Savor gourmet European and Mediterranean dishes in a candle-lit ambiance</p>
                </div>

                <div className="p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-2 text-[#ffe100] md:text-3xl lg:text-4xl">Infinity Pool </h3>
                    <p className="text-white">Rooftop pool with panoramic views -unwind under golden sunsets.</p>
                </div>

                <div className="p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb- text-[#ffe100] md:text-3xl lg:text-4xl">Luxury Spa </h3>
                    <p className="text-white">Rejuvenate with massages and aromatherapy inspired by French wellness traditions.</p>
                </div>

                <div className="p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-2 text-[#ffe100] md:text-3xl lg:text-4xl">Elegant Suites</h3>
                    <p className="text-white">Spacious suites with classical décor, modern amenities, and city views.</p>
                </div>

                <div className="p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-2 text-[#ffe100] md:text-3xl lg:text-4xl">Rooftop Lounge & Bar</h3>
                    <p className="text-white">Sip cocktails and enjoy live music under the starlit sky.</p>
                </div>

                <div className="p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-2 text-[#ffe100] md:text-3xl lg:text-4xl">Event & Banquet Spaces</h3>
                    <p className="text-white">Host elegant gatherings and celebrations in beautifully designed spaces.</p>
                </div>
            </div>

        </section>





    )
}

export default Highlights