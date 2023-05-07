import { logo } from '../assets/index';

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full mb-10 pt-3 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open('')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Search the url and it will give you a summary of the article. <br />{' '}
        There may be some invalid urls.
      </h2>
    </header>
  );
}

export default Hero;
