import { FunctionComponent } from 'react'

interface IProps {
  handleChange: (value: string) => void
}

const SearchInput: FunctionComponent<IProps> = (props) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        onChange={(e) => props.handleChange(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full py-1 pl-8 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
      />
    </div>
  )
}
export default SearchInput