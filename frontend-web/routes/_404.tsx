import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Header from "../components/parts/Header.tsx";
import Footer from "../components/parts/Footer.tsx";
import Meta from "../components/parts/Meta.tsx";

export default function Error404({ url }: PageProps) {
  // Extract the attempted path for potential recommendations
  const attemptedPath = url.pathname;

  // Sample popular lessons based on the site structure
  const popularLessons = [
    {
      title: "The Mystery of the Lost Manuscript",
      date: "2025-06-19",
      level: "Intermediate",
      emoji: "🐔",
      description:
        "A thrilling story about discovering hidden historical documents",
    },
    {
      title: "Adventures in the Digital Age",
      date: "2025-06-18",
      level: "Elementary",
      emoji: "🐥",
      description:
        "Learn about technology and modern life through engaging narratives",
    },
    {
      title: "The Great Scientific Discovery",
      date: "2025-06-17",
      level: "Upper-Intermediate",
      emoji: "🦅",
      description:
        "Explore scientific breakthroughs through captivating storytelling",
    },
    {
      title: "Journey Through Ancient Civilizations",
      date: "2025-06-16",
      level: "Advanced",
      emoji: "🦅🎖️",
      description:
        "Dive into history with complex vocabulary and grammar structures",
    },
  ];

  // Generate simple recommendations based on URL patterns
  const getRecommendations = () => {
    if (
      attemptedPath.includes("beginner") || attemptedPath.includes("level-1")
    ) {
      return popularLessons.filter((lesson) => lesson.level === "Elementary");
    }
    if (
      attemptedPath.includes("intermediate") ||
      attemptedPath.includes("level-3")
    ) {
      return popularLessons.filter((lesson) => lesson.level === "Intermediate");
    }
    if (
      attemptedPath.includes("advanced") || attemptedPath.includes("level-5")
    ) {
      return popularLessons.filter((lesson) => lesson.level === "Advanced");
    }
    return popularLessons.slice(0, 2); // Default recommendations
  };

  const recommendations = getRecommendations();

  return (
    <>
      <Head>
        <title>Page Not Found - MyniQ English Learning</title>
        <Meta
          origin={url.origin}
        />
        <meta
          name="description"
          content="We couldn't find that page, but don't worry! Discover other engaging English lessons and quizzes to continue your learning journey."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="flex flex-col min-h-screen bg-slate-100">
        <Header />

        <main className="flex-grow flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full">
            {/* Main 404 Message */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">📚</div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
                We couldn't find that page, but don't worry! There are plenty of
                other engaging English lessons waiting for you to explore.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href="/"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="text-xl font-bold mb-2">Go Home</h3>
                <p>Return to the main page and explore today's lesson</p>
              </a>

              <a
                href="/tags/theme"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                <div className="text-3xl mb-2">🏷️</div>
                <h3 className="text-xl font-bold mb-2">Browse by Theme</h3>
                <p>Explore lessons organized by themes</p>
              </a>

              <a
                href="/tags/flavor"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                <div className="text-3xl mb-2">📖</div>
                <h3 className="text-xl font-bold mb-2">Browse by Flavor</h3>
                <p>Explore lessons organized by flavors</p>
              </a>
            </div>

            {/* Popular Lessons */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                🌟 Popular Lessons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularLessons.map((lesson, index) => (
                  <a
                    key={index}
                    href={`/pages/${lesson.date}`}
                    className="block bg-slate-50 hover:bg-slate-100 p-4 rounded-lg transition-colors border-l-4 border-blue-500"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{lesson.emoji}</span>
                      <div className="flex-grow">
                        <h3 className="font-bold text-slate-800 mb-1">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-2">
                          {lesson.description}
                        </p>
                        <div className="flex justify-between items-center text-xs text-slate-500">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {lesson.level}
                          </span>
                          <span>{lesson.date}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Recommendations based on URL */}
            {recommendations.length > 0 && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4 text-center">
                  💡 Suggested for You
                </h2>
                <p className="text-amber-700 text-center mb-4">
                  Based on what you were looking for, here are some lessons that
                  might interest you:
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {recommendations.map((lesson, index) => (
                    <a
                      key={index}
                      href={`/pages/${lesson.date}`}
                      className="block bg-white hover:bg-amber-50 p-4 rounded-lg transition-colors border border-amber-200"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{lesson.emoji}</span>
                        <div className="flex-grow">
                          <h3 className="font-bold text-slate-800 mb-1">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">
                            {lesson.description}
                          </p>
                          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                            {lesson.level}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Learning Levels Guide */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                📊 Find Your Level
              </h2>
              <p className="text-slate-600 text-center mb-6">
                Not sure which level to start with? Here's a quick guide to help
                you choose:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">🐣</div>
                  <h3 className="font-bold text-green-800">Beginner</h3>
                  <p className="text-sm text-green-600">
                    Basic sentences & tenses
                  </p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🐥</div>
                  <h3 className="font-bold text-blue-800">Elementary</h3>
                  <p className="text-sm text-blue-600">
                    Modals & perfect tenses
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-2">🐔</div>
                  <h3 className="font-bold text-purple-800">Intermediate</h3>
                  <p className="text-sm text-purple-600">
                    Passive voice & clauses
                  </p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl mb-2">🦅</div>
                  <h3 className="font-bold text-orange-800">Advanced</h3>
                  <p className="text-sm text-orange-600">Complex structures</p>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="text-center bg-slate-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Still can't find what you're looking for?
              </h2>
              <p className="text-slate-600 mb-4">
                Let us know what you were trying to find and we'll help you get
                there!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/"
                  className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold"
                >
                  Return to Homepage
                </a>
                <a
                  href="https://twitter.com/myniq_en"
                  className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-100 transition-colors font-semibold"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
