const ProjectCard = ({ name, className, tags, desc, githubLink }) => {
  function handleClick() {
    console.log("Button clicked");
    window.location.href = githubLink;
  }

  return (
    <div
      className={`${className} grid-item flex flex-col gap-5 md:gap-0 md:justify-between`}
    >
      <h2 className="flex md:items-center md:gap-8 md:justify-normal justify-between">
        {name}
        <div className="md:block hidden">
          {githubLink && (
            <button
              type="button"
              className="text-base z-20 font-normal flex items-center gap-2 bg-black bg-opacity-70 px-3 py-1 rounded-xl hover:bg-opacity-60 active:border"
              onClick={handleClick}
            >
              GitHub
              <img src="/github.svg" alt="" className="w-5 aspect-square" />
            </button>
          )}
        </div>
        <div className="md:hidden block">
          {githubLink && (
            <button
              type="button"
              className="rounded-full bg-black border-black border-[5px]"
              onClick={handleClick}
            >
              <img src="/github.svg" alt="" className="w-6 aspect-square" />
            </button>
          )}
        </div>
      </h2>

      <p className="text-base font-Roboto font-light text-primaryLight">
        {desc && desc}
      </p>

      <div className="flex gap-4 flex-wrap">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-primaryLight rounded-lg text-primaryDark px-2 py-1 flex items-center gap-1"
            >
              <i className={`${tag.iconClass}`}></i>
              {tag?.name}
            </span>
          ))}
      </div>
    </div>
  );
};
export default ProjectCard;
