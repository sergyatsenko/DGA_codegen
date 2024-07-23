import React from "react";
import Link from "next/link";

const BlogDetailsSS = () => {
  return (
    <div className="flex justify-center bg-white min-h-screen">
      <div className="max-w-3xl w-full px-4 py-8">
        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        <div className="mb-6">
          <img
            src="/placeholder-main-image.png"
            alt="Ti West"
            className="w-full h-auto"
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              share
            </button>
            <button className="bg-blue-400 text-white px-3 py-1 rounded">
              tweet
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-red-700 mb-2">
          Director Ti West discusses MaXXXine
        </h1>
        <p className="text-gray-600 mb-4">July 13, 2024</p>
        <p className="font-semibold mb-4">
          A DGA Membership Screening Q&A in Los Angeles
        </p>

        <div className="space-y-4 text-gray-800">
          <p>
            "The past ain't finished with you yet," is a quote that portends
            looming trouble for the titular character in Director Ti West's
            crime horror, MaXXXine.
          </p>

          <p>
            In the third film of the trilogy that began with his film X and
            continued with Pearl, West's MaXXXine finds adult film star Maxine
            Minx on the verge of breaking into legitimate films in 1980s
            Hollywood. But as a mysterious killer stalks the starlets of
            Hollywood, a trail of blood threatens to reveal her sinister past.
          </p>

          <p>
            On July 16, after the DGA membership screening in Los Angeles, West
            discussed the making of MaXXXine during a Q&A moderated by Director
            Sean Baker (Anora).
          </p>

          <p>
            During the conversation, West spoke about the challenges of also
            serving as the editor of the film.
          </p>

          <p>
            "A lot of times that's the hardest part because everybody has a
            great time on the movie and then they go home and you're still
            sitting there with all the not good versions of the movie that
            you're trying to build back into what it was meant to be. Everybody
            else is off on another movie with new friends having a great time
            and you're trying to figure out why this thing that seems like it
            should work, didn't work. It's long and technical and in the end I'm
            always happy that I did it, but it can be grueling at times."
          </p>

          <p>
            He also revealed how he and cinematographer Eliot Rockett
            collaborated to bring his style to each of the three films of this
            trilogy.
          </p>

          <p>
            "I think Eliot gets my aesthetic. When we did Pearl, we took such a
            big swing. I think that was a real turning point. When you're making
            a movie, time is never on your side and sometimes you're just
            frantic just to photograph anything to get this day done to get
            through the scene because you're running out of time and you just
            need to make it exist. We always remind ourselves, even in those
            moments, try not to leave cinema on the table and try to find a shot
            that complements the movie or a specific stylistic thing that can be
            done in the scene to give a character because it's so easy just to
            be trying to survive the day that you that you forget about that.
            And you get an edit room and you go, 'Oh man! We could have done so
            much more here,' and we just did it because we got stressed out.'"
          </p>

          <p>
            West's other directorial credits include the feature films X, Pearl,
            In a Valley of Violence, Cabin Fever 2: Spring Fever, The House of
            the Devil and The Roost; the mini-series Dead and Lonely; and
            episodes of the series Them, Tales from the Loop, Soundtrack, The
            Resident, Chambers, The Passage, Outcast, Wayward Pines, South of
            Hell and Scream: The TV Series. He has been a DGA member since 2014.
          </p>
        </div>

        <div className="mt-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="/placeholder-image.png0"
              alt="Podcast player"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">PICTURES</h2>
          <p className="text-sm text-gray-600 mb-4">
            Q&A photos by Shane Karns – Print courtesy of A24
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            View slideshow
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[...Array(6)].map((_, index) => (
              <img
                key={index}
                src={`/placeholder-image.png`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSS;
