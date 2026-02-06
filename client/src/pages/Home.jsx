export default function Home() {
  return (
    <section className="mt-24 text-center">
      <h1 className="font-diary text-5xl leading-tight">
        Your life,
        <br />
        written beautifully.
      </h1>

      <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
        MyDiary helps you capture moments, thoughts, and memories —
        preserved chronologically, styled like timeless stories.
      </p>

      <div className="mt-10 flex justify-center gap-4">
       <button className="rounded-full bg-primary px-6 py-3 text-white border border-primary hover:opacity-90 transition">
  Start writing
</button>


        <button className="rounded-full border border-border px-6 py-3 font-ui hover:bg-muted transition">
          Learn more
        </button>
      </div>
    </section>
  );
}
