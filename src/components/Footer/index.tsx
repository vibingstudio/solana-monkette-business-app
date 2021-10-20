const Footer = () => {
  return (
    <footer className="bg-strong-pink w-screen text-center text-white">
      <div className="flex flex-row justify-center py-3">
        <a
          href="https://twitter.com/MonketteSolana"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-xl mx-2">Twitter</h1>
        </a>
        <a
          href="https://discord.gg/8kgKv9YEZH"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-xl mx-2">Discord</h1>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
