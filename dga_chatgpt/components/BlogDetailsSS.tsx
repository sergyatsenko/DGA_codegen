import Link from "next/link";
import React from "react";

const BlogDetailsSS = () => {
  return (
    <div className="bg-white text-black p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-blue-400 hover:underline">
          &lt; Back to Home
        </Link>
        <div className="mt-4">
          <img
            src="/placeholder-main-image.png"
            alt="Main"
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-end space-x-2 mt-2">
          <button className="bg-blue-600 px-4 py-2 rounded">Share</button>
          <button className="bg-blue-400 px-4 py-2 rounded">Tweet</button>
        </div>
        <h1 className="text-2xl font-bold mt-4">
          Director Ti West discusses MaXXXine
        </h1>
        <p className="text-gray-400 mt-2">July 13, 2024</p>
        <p className="text-gray-400 mt-2">
          A DGA Membership Screening Q&A in Los Angeles
        </p>
        <p className="mt-4">
          “The past ain’t finished with you yet,” is a quote that portends
          looming trouble for the titular character in Director Ti West’s crime
          horror, <span className="italic">MaXXXine</span>.
        </p>
        <p className="mt-4">
          In the third film of the trilogy that began with his film{" "}
          <span className="italic">X</span> and continued with{" "}
          <span className="italic">Pearl</span>, West’s{" "}
          <span className="italic">MaXXXine</span> finds adult film star Maxine
          Minx on the verge of breaking into legitimate films in 1980s
          Hollywood. But as a mysterious killer stalks the starlets of
          Hollywood, a trail of blood threatens to reveal her sinister past.
        </p>
        <p className="mt-4">
          On July 16, after the DGA membership screening in Los Angeles, West
          discussed the making of <span className="italic">MaXXXine</span>{" "}
          during a Q&A moderated by Director Sean Baker (
          <span className="italic">Anora</span>).
        </p>
        <p className="mt-4">
          During the conversation, West spoke about the challenges of also
          serving as the editor of the film.
        </p>
        <blockquote className="mt-4 pl-4 border-l-4 border-gray-600">
          <p className="italic">
            “A lot of times that’s the hardest part because everybody has a
            great time on the movie and then they go home and you’re still
            sitting there with all the not good versions of the movie that
            you’re trying to build back into what it was meant to be. Everybody
            else is off on another movie with new friends having a great time
            and you’re trying to figure out why this thing that seems like it
            should work, didn’t work. It’s long and technical and in the end I’m
            always happy that I did it, but it can be grueling at times.”
          </p>
        </blockquote>
        <p className="mt-4">
          He also revealed how he and cinematographer Eliot Rockett collaborated
          to bring his style to each of the three films of this trilogy.
        </p>
        <blockquote className="mt-4 pl-4 border-l-4 border-gray-600">
          <p className="italic">
            “I think Eliot gets my aesthetic. When we did{" "}
            <span className="italic">Pearl</span>, we took such a big swing. I
            think that was a real turning point. When you’re making a movie,
            time is never on your side and sometimes you’re just frantic just to
            photograph anything to get this day and to get through the scene
            because you’re running out of time and you just need to make it
            exist. We always remind ourselves, even in those moments, try not to
            leave cinema on the table and try to find a shot that complements
            the movie or a specific stylistic thing that can be done in the
            scene to give a character because it’s so easy just to be trying to
            survive the day that you forget about that. And you get an edit room
            and you go, ‘Oh man! We could have done so much more here, and we
            just did it because we got stressed out.’”
          </p>
        </blockquote>
        <p className="mt-4">
          West’s other directorial credits include the feature films{" "}
          <span className="italic">X</span>,{" "}
          <span className="italic">Pearl</span>,{" "}
          <span className="italic">In a Valley of Violence</span>,{" "}
          <span className="italic">Cabin Fever 2: Spring Fever</span>,{" "}
          <span className="italic">The House of the Devil</span> and{" "}
          <span className="italic">The Roost</span>; the mini-series{" "}
          <span className="italic">Dead and Lonely</span>; and episodes of the
          series{" "}
          <span className="italic">
            Them, Tales from the Loop, Soundtrack, The Resident, Chambers, The
            Passage, Outcast, Wayward Pines, South of Hell
          </span>{" "}
          and <span className="italic">Scream: The TV Series</span>. He has been
          a DGA member since 2014.
        </p>
        <div className="mt-4">
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/placeholder"
            width="100%"
            height="232"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">PICTURES</h2>
          <p className="text-gray-400">
            Q&A photos by Shane Karns – Print courtesy of A24
          </p>
          <Link href="/slideshow" className="text-blue-400 hover:underline">
            View slideshow
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <img
              src="/placeholder-image.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="/placeholder-image.png"
              alt="Image 2"
              className="w-full h-auto"
            />
            <img
              src="/placeholder-image.png"
              alt="Image 3"
              className="w-full h-auto"
            />
            <img
              src="/placeholder-image.png"
              alt="Image 4"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSS;
