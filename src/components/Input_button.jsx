export default function Input_button({children, onClick}) {
  return (
    <div className="text-center mt-5">
      <button className="button btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
