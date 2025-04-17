
import Threads from "@/components/Threads";
import SignupForm from "@/components/SignupForm";


export default function Home() {
  return (
    <div className="absolute w-full h-dvh bg-neutral-900">
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl">
        <h2 className="text-4xl md:text-5xl uppercase text-cyan-500 font-bold font-montserrat">Knowledge not noise</h2>
        <p className="text-xl font-black my-2 text-cyan-50 font-open-sans">Learn from certified financial advisors real stratagies for setting and achieving your most important finacial goals<br />Get on the wait list today!</p>
        <div className=" my-4 mx-auto">
          <SignupForm />
        </div>
      </div>
      <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
      />
    </div>
  );
}
