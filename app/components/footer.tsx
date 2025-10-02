function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-8 mt-12">
      <ul className="font-sans font-sm flex flex-col space-x-0 space-y-2 text-[#4E1F00] flex-row space-x-4 space-y-0">
      <li>
        <a
        className="flex items-center transition-all hover:text-stone-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Wu-Jinzhou"
        >
        <ArrowIcon />
        <p className="ml-2 h-7">github</p>
        </a>
      </li>
      <li>
        <a
        className="flex items-center transition-all hover:text-stone-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/jinzhouwu/"
        >
        <ArrowIcon />
        <p className="ml-2 h-7">linkedin</p>
        </a>
      </li>
      <li>
        <a
        className="flex items-center transition-all hover:text-stone-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/29.watson/"
        >
        <ArrowIcon />
        <p className="ml-2 h-7">instagram</p>
        </a>
      </li>
      </ul>
    </footer>
  )
}