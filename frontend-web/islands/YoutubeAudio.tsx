import { useEffect, useMemo } from "preact/hooks";
import { AudioData } from "../domains/audio.ts";
import { useSignal } from "@preact/signals";

type AudioDataWithId = Extract<AudioData, { id: string }>;
type AudioDataWithEmbedUrl = Extract<AudioData, { url: string }>;

const STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

type StateValue = typeof STATE[keyof typeof STATE];

declare global {
  interface Window {
    YT: {
      // deno-lint-ignore no-explicit-any
      Player: any;
    };
    // deno-lint-ignore no-explicit-any
    player: any;
    youtubeEventListeners: {
      onError: (e: never) => void;
      onReady: (e: never) => void;
      onStateChange: (e: never) => void;
    };
  }
}

let seekTapTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

export default function YoutubeAudio({ data }: { data: AudioData }) {
  const { date, title, url } = data as AudioDataWithEmbedUrl;
  const { id } = data as AudioDataWithId;
  const YT = globalThis.window?.YT;
  // deno-lint-ignore no-explicit-any
  const player = useSignal<any | undefined>(globalThis.window?.player);
  const isError = useSignal(false);
  const state = useSignal<StateValue>(STATE.UNSTARTED);
  const currentTime = useSignal(0);
  const durationTime = useSignal(0);
  const currentVolume = useSignal(0);
  const beforeMuteVolume = useSignal(0);
  const events = useMemo(() => ({
    onError: (e: never) => {
      console.error(e);
      isError.value = true;
    },
    // deno-lint-ignore no-explicit-any
    onReady: (event: any) => {
      globalThis.window.player = player.value = event.target;
      durationTime.value = player.value.getDuration();
    },
    // deno-lint-ignore no-explicit-any
    onStateChange: (event: any) => {
      globalThis.window.player = player.value = event.target;
      state.value = event.data;
      if (event.data === STATE.CUED) {
        durationTime.value = player.value.getDuration();
      }
    },
  }), [player, durationTime, state]);
  useEffect(() => {
    globalThis.window.youtubeEventListeners = events;
    return () => {
      globalThis.window.youtubeEventListeners = {
        onError: () => {},
        onReady: () => {},
        onStateChange: () => {},
      };
    };
  }, [events]);
  useEffect(() => {
    if (!id) {
      return;
    }
    if (player.value) {
      player.value.cueVideoById(id);
    } else {
      new YT.Player(
        "yt_hidden_player",
        {
          height: "0",
          width: "0",
          videoId: id,
          playerVars: {
            autoplay: 0,
            controls: 0,
          },
          events: {
            onError: (e: never) => {
              globalThis.window.youtubeEventListeners.onError(e);
            },
            onReady: (e: never) => {
              globalThis.window.youtubeEventListeners.onReady(e);
            },
            onStateChange: (e: never) => {
              globalThis.window.youtubeEventListeners.onStateChange(e);
            },
          },
        },
      );
    }

    return () => {
      if (player.value) {
        player.value.stopVideo();
      }
    };
  }, [YT, player, id, title, date]);

  useEffect(() => {
    let timeout: number | undefined;
    if (player.value && state.value === STATE.PLAYING) {
      timeout = setTimeout(() => {
        if (player.value && state.value === STATE.PLAYING) {
          currentTime.value = player.value.getCurrentTime();
        }
      }, 30);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [player, currentTime.value, state.value]);

  useEffect(() => {
    let timeout: number | undefined;
    if (player.value && state.value === STATE.PLAYING) {
      timeout = setTimeout(() => {
        const vol = player.value && player.value.getVolume();
        currentVolume.value = beforeMuteVolume.value === 0 && vol && !isNaN(vol)
          ? vol / 100
          : 0;
      }, 30);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [player, beforeMuteVolume.value, currentVolume.value, state.value]);

  if (url) {
    return (
      <>
        <iframe
          className="w-24 h-12 print:hidden"
          src={url}
          title={title}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
        />
      </>
    );
  } else {
    if (isError.value) {
      return <></>;
    }
    return (
      <>
        <div className="flex flex-row bg-slate-800 items-center rounded-b-xl relative px-1 no-ad print:hidden">
          <div className="w-16">
            <button
              type="button"
              name={player.value && state.value === STATE.PLAYING
                ? "pause"
                : "play"}
              onClick={() => {
                if (!player.value) {
                  return;
                }
                if (state.value === STATE.PLAYING) {
                  player.value.pauseVideo();
                } else {
                  player.value.playVideo();
                }
              }}
              className="focus:outline-none"
            >
              {state.value === STATE.PLAYING
                ? (
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 300 300"
                  >
                    <g>
                      <rect
                        className="stroke-slate-100 fill-slate-100 stroke-[12]"
                        x="100"
                        y="100"
                        width="20"
                        height="100"
                      />
                      <rect
                        className="stroke-slate-100 fill-slate-100 stroke-[12]"
                        x="180"
                        y="100"
                        width="20"
                        height="100"
                      />
                    </g>
                  </svg>
                )
                : (
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 300 300"
                  >
                    <g>
                      <polygon
                        className="stroke-slate-100 fill-slate-100 stroke-[12]"
                        strokeLinejoin="round"
                        points="120,100 120,200 200,150"
                      />
                    </g>
                  </svg>
                )}
            </button>
          </div>
          <div className="w-full h-8">
            <input
              type="range"
              min={0}
              step={0.05}
              max={100}
              name="seek"
              value={currentTime.value / durationTime.value * 100}
              className="w-full h-2 bg-transparent border-2 rounded-lg appearance-none cursor-pointer"
              onMouseDown={() => {
                if (player.value) {
                  seekTapTimeout = setTimeout(() => {
                    player.value.pauseVideo();
                  }, 100);
                }
              }}
              onMouseUp={(e) => {
                const value = durationTime.value / 100 *
                  Number(e.currentTarget.value);
                if (player.value) {
                  clearTimeout(seekTapTimeout);
                  player.value.pauseVideo();
                  player.value.seekTo(
                    value,
                  );
                  player.value.playVideo();
                }
              }}
            />
          </div>
          <div className="w-24 flex flex-row">
            <div>
              <button
                type="button"
                name={beforeMuteVolume.value === 0 ? "mute" : "unmute"}
                onClick={() => {
                  if (!player.value) {
                    return;
                  }
                  if (beforeMuteVolume.value === 0) {
                    const tmp = player.value.getVolume();
                    player.value.setVolume(0);
                    beforeMuteVolume.value = tmp;
                  } else if (!isNaN(beforeMuteVolume.value)) {
                    player.value.setVolume(beforeMuteVolume.value);
                    beforeMuteVolume.value = 0;
                  }
                }}
                className="focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 300 300"
                >
                  <rect
                    x="58"
                    y="120"
                    width="42"
                    height="60"
                    className={beforeMuteVolume.value == 0
                      ? "stroke-slate-100 fill-slate-100 stroke-[12]"
                      : "stroke-slate-600 fill-slate-600 stroke-[12]"}
                  />
                  <polygon
                    points="60,150 175,90 175,210"
                    className={beforeMuteVolume.value == 0
                      ? "stroke-slate-100 fill-slate-100 stroke-[12]"
                      : "stroke-slate-600 fill-slate-600 stroke-[12]"}
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center w-12 h-8">
              <input
                type="range"
                name="volume"
                min={0}
                max={1}
                step={0.01}
                defaultValue={String(currentVolume.value)}
                onChange={(e) => {
                  player.value.setVolume(Number(e.currentTarget.value) * 100);
                }}
                className="w-full h-2 bg-transparent border-2 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          <div className="bg-white ml-1 p-1 rounded absolute bottom-10 right-1">
            <a
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="watch on youtube"
                src="/img/YT_logo.svg"
                className="w-16 block relative"
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}
