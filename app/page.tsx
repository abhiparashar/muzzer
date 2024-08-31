import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Appbar from "./components/Appbar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-violet-400 dark:text-pink-400">
      <Appbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background dark:bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-violet-400 dark:text-pink-400">
                    Tune In: Where Fans Choose the Music
                  </h1>
                  <p className="max-w-[600px] text-violet-400 dark:text-pink-400 md:text-xl">
                    Discover new music and interact with your favorite creators
                    like never before. Tune In lets fans vote on the music
                    played during live streams, creating a unique and engaging
                    experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-[#FF69B4] mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-violet-400 dark:text-pink-400">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-violet-400 dark:text-pink-400">
                  Engage Your Fans Like Never Before
                </h2>
                <p className="max-w-[900px] text-violet-400 dark:text-pink-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tune In gives your fans a voice in the music you play during
                  your live streams. Let them vote on upcoming songs, create
                  custom playlists, and interact with you in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-violet-400 dark:text-pink-400">
                  Popular Creators
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-violet-400 dark:text-pink-400">
                  Discover Your New Favorite Creators
                </h2>
                <p className="max-w-[600px] text-violet-400 dark:text-pink-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tune In is home to a growing community of talented creators
                  across a variety of music genres. Discover new artists and
                  connect with your favorites.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-background w-20 h-20 flex items-center justify-center text-4xl">
                    🎸
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-violet-400 dark:text-pink-400">
                      John Doe
                    </div>
                    <div className="text-sm text-violet-400 dark:text-pink-400">
                      Indie Rock
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-background w-20 h-20 flex items-center justify-center text-4xl">
                    🎹
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-violet-400 dark:text-pink-400">
                      Jane Smith
                    </div>
                    <div className="text-sm text-violet-400 dark:text-pink-400">
                      Electronic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-background dark:bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-violet-400 dark:text-pink-400">
                Join the Tune In Community
              </h2>
              <p className="mx-auto max-w-[600px] text-violet-400 dark:text-pink-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up today to start engaging with your favorite creators and
                discovering new music.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary dark:bg-primary text-primary-foreground">
        <p className="text-xs text-violet-400 dark:text-pink-400">
          &copy; 2024 Tune In. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-violet-400 dark:text-pink-400"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-violet-400 dark:text-pink-400"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
