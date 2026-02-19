import { Smartphone, Star, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-neo-yellow py-12 md:py-20">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-neo-pink neo-border rotate-12 hidden md:block" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-neo-blue neo-border -rotate-6 hidden md:block" />
      <div className="absolute top-1/2 left-5 w-8 h-8 bg-foreground rotate-45 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-neo-pink neo-border neo-shadow px-4 py-2 mb-6">
              <span className="text-primary-foreground font-bold uppercase tracking-widest text-sm">
                🎯 #1 Quiz App
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
              Play Quiz.
              <br />
              <span className="bg-neo-blue neo-border px-3 inline-block mt-2">Win Money.</span>
              <br />
              <span className="bg-neo-pink neo-border px-3 text-primary-foreground inline-block mt-2">
                Repeat! 🏆
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium mb-8 max-w-lg mx-auto lg:mx-0 text-foreground">
              Get <strong>100 free tokens</strong> on signup. Pick your category, answer questions, and withdraw
              winnings directly to your bank!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="neo-btn bg-foreground text-background text-center text-lg"
              >
                <Smartphone className="inline-block mr-2 w-5 h-5" />
                Download for Android
              </a>
              <a
                href="#how-to-use"
                className="neo-btn bg-background text-foreground text-center text-lg"
              >
                How It Works →
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="font-bold text-foreground">4.8/5 · 10K+ Downloads</span>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="neo-border neo-shadow-xl bg-neo-pink p-4 rotate-2 animate-float">
                <img
                  src={heroPhone}
                  alt="QuizWin App Screenshot"
                  className="w-72 md:w-80 neo-border"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-neo-green neo-border neo-shadow px-3 py-2 rotate-6 animate-bounce-subtle">
                <span className="font-bold text-foreground text-sm">100 FREE TOKENS!</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background neo-border neo-shadow px-3 py-2 -rotate-3">
                <Zap className="inline w-4 h-4 text-foreground" />
                <span className="font-bold text-foreground text-sm ml-1">INSTANT WITHDRAW</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee bar */}
      <div className="mt-16 bg-foreground neo-border py-3 overflow-hidden">
        <div className="marquee whitespace-nowrap">
          <span className="text-background font-bold text-lg tracking-widest">
            ★ PLAY QUIZ ★ WIN MONEY ★ FREE TOKENS ★ EASY WITHDRAW ★ MULTIPLE CATEGORIES ★ PLAY QUIZ ★ WIN MONEY ★ FREE TOKENS ★ EASY WITHDRAW ★ MULTIPLE CATEGORIES ★ PLAY QUIZ ★ WIN MONEY ★ FREE TOKENS ★ EASY WITHDRAW ★ MULTIPLE CATEGORIES ★
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
