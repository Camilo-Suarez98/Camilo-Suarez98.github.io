import React from 'react';

const Timeline = () => {
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li className='hidden lg:grid lg:grid-cols-1'>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end text-sm">
            <time className="font-mono italic text-sm">July 2025 - Currently</time>
            <div className="text-lg font-black text-base">Frontend Developer</div>
            <div className="text-lg font-bold text-base">Mocion Experience Tech</div>
            - I developed a new software to create events and receive the data from users about the event.
            And that data could be selled to other companies to make new events and improve the user experience.
          </div>
          <hr />
        </li>
        <li className='lg:hidden'>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end text-lg md:mb-10 lg:text-sm">
            <time className="font-mono italic text-xl lg:text-sm">July 2025 - Currently</time>
            <div className="text-lg font-black text-xl lg:text-base">Frontend Developer</div>
            <div className="text-lg font-bold text-base">Mocion Experience Tech</div>
            - I developed a new software to create events and receive the data from users about the event.
            And that data could be selled to other companies to make new events and improve the user experience.
          </div>
          <hr />
        </li>
        <li className='lg:grid-cols-1'>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 text-lg md:text-end lg:text-sm">
            <time className="font-mono italic text-xl lg:text-sm">January 2023 - Currently</time>
            <div className="text-lg font-black text-xl lg:text-base">Frontend Developer</div>
            <div className="text-lg font-bold text-base">Freelance</div>
            - I have developed websites and landing pages for several US-based companies using different technologies, enhancing their online presence
            and showcasing expertise in web technologies and design trends
            <br />
            - I work closely with a senior frontend developer at a major US company, playing a key role in identifying and resolving bugs in web projects and contributing to the creation of new interfaces, expanding frontend development experience.
          </div>
          <hr />
        </li>
        <li className='hidden lg:grid lg:grid-cols-1'>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end text-sm">
            <time className="font-mono italic text-sm">July 2022 - December 2022</time>
            <div className="text-lg font-black text-base">Frontend Developer</div>
            <div className="text-lg font-bold text-base">Genco</div>
            - I developed responsive and user-friendly interfaces using HTML, CSS, JavaScript and React to improve website functionality and enhance the user experience. In addition, created landing pages for marketing campaigns.
            <br />
            - I collaborated with the design and product team to implement new features and optimise existing code to improve site performance.
          </div>
          <hr />
        </li>
        <li className='lg:hidden'>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end text-lg md:mb-10 lg:text-sm">
            <time className="font-mono italic text-xl lg:text-sm">July 2022 - December 2022</time>
            <div className="text-lg font-black text-xl lg:text-base">Frontend Developer</div>
            <div className="text-lg font-bold text-base">Genco</div>
            - I developed responsive and user-friendly interfaces using HTML, CSS,
            JavaScript and React to improve website functionality and enhance the user experience. In addition, created landing pages for marketing campaigns.
            <br />
            - I collaborated with the design and product team to implement new features and optimise existing code to improve site performance.
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Timeline;
