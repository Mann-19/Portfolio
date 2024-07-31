const ProjectCard = ({ name, className, tags, desc, githubLink }) => {
  function handleClick() {
    console.log("Button clicked");
    window.location.href = githubLink;
  }

  return (
    <div
      className={`${className} grid-item flex flex-col gap-5 md:gap-0 md:justify-between`}
    >
      <h2 className="">{name}</h2>

      <p className="text-base font-Roboto font-light text-primaryLight">
        {desc && desc}
      </p>

      <div className="flex gap-4 flex-wrap">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-primaryLight rounded-lg text-primaryDark px-2 py-1"
            >
              {tag}
            </span>
          ))}
      </div>

      <div>
        {githubLink && (
          <button type="button" className="text-base z-20 font-normal flex items-center gap-2 bg-black px-3 py-1 rounded-xl hover:bg-opacity-60 active:border" onClick={handleClick}>
            GitHub
            <img src="/github.svg" alt="" className="w-5 aspect-square" />
          </button>
        )}
        {/* {props.links && <button><img src="" alt="" /></button>} */}
      </div>
    </div>
  );
};
export default ProjectCard;
