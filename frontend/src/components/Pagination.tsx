export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center">
      <ul className="flex ">
        {pageNumbers.map((number) => (
          <li
            className={`px-2 py-1 cursor-pointer ${
              page === number ? "bg-purple" : "hover:bg-gray-300"
            }`}
          >
            <button
              onClick={() => onPageChange(number)}
              className={`focus:outline-none ${
                page === number ? "text-white" : "text-black"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
