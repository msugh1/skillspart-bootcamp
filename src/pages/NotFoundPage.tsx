import ButtonLink from "../components/ui/ButtonLink";

export default function NotFoundPage() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-white px-5 py-20 text-center">
      <div>
        <p className="text-sm font-bold text-spark-dark">404</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">This page could not be found.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">The link may be broken or the page may have moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/">Back home</ButtonLink>
          <ButtonLink to="/programmes" variant="secondary">View programmes</ButtonLink>
        </div>
      </div>
    </section>
  );
}
