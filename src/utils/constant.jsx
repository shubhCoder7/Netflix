export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR_LOGO =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg ";

// export const SUPPORTED_LANGUAGES = [
//   { identifier: "eng", name: "English" },
//   { identifier: "hindi", name: "Hindi" },
//   { identifier: "spanish", name: "Spanish" },
//   { identifier: "french", name: "French" },
//   { identifier: "chinese", name: "Chinese" },
//   { identifier: "marathi", name: "Marathi" },
//   { identifier: "telugu", name: "Telgu" },
//   { identifier: "tamil", name: "Tamil" },
//   { identifier: "kannada", name: "Kannada" },
//   { identifier: "dutch", name: "Dutch" },
//   { identifier: "japanese", name: "Japanese" },
// ];

// export const OPENAI_KEY =
//   "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";

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
