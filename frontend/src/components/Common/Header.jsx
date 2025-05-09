
const Header = ({ label, title, showArrows = false }) => {
    return (
        <div className="flex justify-between items-center mt-14">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-10 bg-[#DB4444] rounded-sm text-xl font-bold" />
              <span className="text-sm text-red-500 font-medium">{label}</span>
            </div>
            <h2 className="text-xl font-bold mt-1">{title}</h2>
          </div>
          {showArrows && (
            <div className="flex gap-2">
              <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">
                <span>&larr;</span>
              </button>
              <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">
                <span>&rarr;</span>
              </button>
            </div>
          )}
        </div>
      );
}

export default Header