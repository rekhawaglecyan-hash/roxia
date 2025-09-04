import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Explore Chitwan with Trusted Local Guides
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-85">
              Book jungle safaris, guided tours, and yoga & spiritual activities with
              verified guides. Seamless booking, secure payments, unforgettable experiences.
            </p>
            <div id="cta" className="mt-8 flex gap-3">
              <Link
                href="#offerings"
                className="rounded-full bg-[#0e7490] text-white px-5 py-3 text-sm font-medium hover:opacity-90"
              >
                Browse Offerings
              </Link>
              <Link
                href="#features"
                className="rounded-full border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
              >
                Why Roxia
              </Link>
            </div>
          </div>
          <div className="aspect-video rounded-xl bg-[radial-gradient(circle_at_30%_20%,#0ea5e9_0%,transparent_30%),radial-gradient(circle_at_70%_60%,#0e7490_0%,transparent_35%)] border border-black/10 dark:border-white/10" />
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 mt-20">
        <h2 className="text-2xl font-semibold">Why choose Roxia</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <div className="font-medium">Verified local experts</div>
            <p className="mt-1 text-sm opacity-80">
              Guides are identity-verified and reviewed by travelers.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <div className="font-medium">Safe and seamless booking</div>
            <p className="mt-1 text-sm opacity-80">
              Secure payments, instant confirmations, and clear itineraries.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <div className="font-medium">Authentic experiences</div>
            <p className="mt-1 text-sm opacity-80">
              Explore beyond the usual with community-led activities.
            </p>
          </div>
        </div>
      </section>

      <section id="offerings" className="mx-auto max-w-6xl px-6 mt-20">
        <h2 className="text-2xl font-semibold">Popular offerings in Chitwan</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <article className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <div className="text-base font-medium">Jungle Safari</div>
            <p className="mt-1 text-sm opacity-80">
              Half-day and full-day safaris with licensed naturalists.
            </p>
            <button className="mt-3 text-sm text-[#0e7490] hover:underline">View details</button>
          </article>
          <article className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <div className="text-base font-medium">Cultural Village Tour</div>
            <p className="mt-1 text-sm opacity-80">
              Immersive Tharu culture tours and local cuisine experiences.
            </p>
            <button className="mt-3 text-sm text-[#0e7490] hover:underline">View details</button>
          </article>
          <article className="rounded-lg border border-black/10 dark:border-white/10 p-5">
            <div className="text-base font-medium">Yoga & Spiritual Retreats</div>
            <p className="mt-1 text-sm opacity-80">
              Sunrise yoga by the Rapti River and meditation sessions.
            </p>
            <button className="mt-3 text-sm text-[#0e7490] hover:underline">View details</button>
          </article>
        </div>
      </section>
    </>
  );
}
