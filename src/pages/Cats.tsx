function Cats() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Cat Zone</h2>
      <p className="text-lg leading-relaxed mb-4">Prepare for an overwhelming cute experience!</p>

      <div className="mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8Ew9P5_3ALw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <img src="/assets/cat1.jpg" alt="A cute cat" className="rounded-lg" />
        <img src="/assets/cat2.jpg" alt="Another cute cat" className="rounded-lg" />
        <img src="/assets/cat3.jpg" alt="Yet another cute cat" className="rounded-lg" />
      </div>
    </div>
  );
}

export default Cats;
