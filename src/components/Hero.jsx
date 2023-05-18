import { logo } from "../assets";

const Hero = () => {
  return (
    <header children="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-start w-full mb-10 pt-3">
        <img src={logo} alt="summarizer logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/rb-isiaq/ai-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumz AI, a web app article summarizer that
        transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
