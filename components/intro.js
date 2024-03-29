export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        FLY5
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Premier Drone Production and Services in{" "}
        <a
          href="https://spacemonkeyfilms.us"
          className="underline hover:text-success duration-200 transition-colors"
        >
          San Francisco, CA
        </a>{" "}
        and{" "}
        <a
          href="/about"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Charlotte, NC
        </a>
        .
      </h4>
    </section>
  );
}
