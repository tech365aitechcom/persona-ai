import React from "react";

const TeamMember = ({ role, name, bio, imageSrc, imagePosition = "right" }) => {
  const contentOrder = imagePosition === "right" ? "order-1" : "order-2";
  const imageOrder = imagePosition === "right" ? "order-2" : "order-1";

  return (
    <div className="relative bg-white rounded-[2rem] shadow-lg p-4 md:p-12 flex flex-col md:flex-row items-center gap-12 mb-12 max-w-4xl mx-auto">
      <div className={`flex-1 ${contentOrder}`}>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-gray-600 text-lg mb-1">{role}</p>
            <h2 className="text-[1.75rem] font-bold text-blue-900 mb-6">
              {name}
            </h2>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-blue-700 hover:text-blue-800">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-950">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>
      </div>
      <div className={`${imageOrder}`}>
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const DecorativeShape = ({ className }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
      <path
        d="M0 200C0 89.543 89.543 0 200 0C310.457 0 400 89.543 400 200C400 310.457 310.457 400 200 400C89.543 400 0 310.457 0 200Z"
        fill="#BBE5FA"
        fillOpacity="0.3"
      />
    </svg>
  </div>
);

const Testimonial = () => {
  return (
    <div className="relative min-h-screen bg-blue-50 py-20 px-2 md:px-6 overflow-hidden">
      {/* Decorative shapes */}
      <DecorativeShape className="-top-40 -left-20 rotate-45" />
      <DecorativeShape className="-bottom-60 -right-40 rotate-12" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-300 text-lg mb-3">Some Subtitle</p>
          <h1 className="text-5xl font-bold text-blue-900">
            Meet the <span className="text-yellow-400">Team</span>
          </h1>
        </div>

        <div className="space-y-12">
          <TeamMember
            role="Founder"
            name="Scott Johnson"
            bio="Scott Johnson brings extensive leadership experience to PersonaAI, with a background in educational product development, market research, business development, and managing large organizations. He has served an executive in several education businesses, including eight years as CEO of Interactive Composition Corporation, operating in Portland, Oregon, and New Delhi, India."
            imageSrc="https://s3-alpha-sig.figma.com/img/a742/bd65/6480dbc195adba8f5a0bbb0d0a283593?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UNYgExrfZ4Iuwlp140J0QqBk~eVKi8dwE3tI1UUvsXBxWsq9Dnnro3YzYziwX1aKrCT90g3DG75myn3NhHmCja8CTTv-DFoUUj2-IfAG7vv3z0hO98MvDb~mxF7L00w8W-~WcwaTqxDAokeBqJ3cnUfIQ~hyZG1Gy1uqoRq6QR7JU8aJpv8C1dlc0y9fvr~vG1fLmonznRA8XKoaVnaxSvS5wSsW5bFOg3CeCotSPyJp1SQnq3L0jp1chtgE8R9A78Lt4XnR67WCpzGcDy4i1XJ9LKVa2Og4A~QFLv7cq3YMGdV3jn3OooQxD5ls2oGhSKneX4z5fB1k7t07QwKhNg__"
            imagePosition="right"
          />

          <TeamMember
            role="Chief Research Strategist"
            name="Michaelyn Williams"
            bio="Scott Johnson brings extensive leadership experience to PersonaAI, with a background in educational product development, market research, business development, and managing large organizations. He has served an executive in several education businesses, including eight years as CEO of Interactive Composition Corporation, operating in Portland, Oregon, and New Delhi, India."
            imageSrc="https://s3-alpha-sig.figma.com/img/bde2/b3bf/f91df4229e6929102d06b8679a16e2c4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GqtBNrz26FL4P96Pf6HRoD8eJ2~wL4RwIHn4mANuVcR66jSrj36KwTilQkVI3qOtO7YEZbrbD98LQ1MawUHr1nXbmoMmwlVlHLA5fzZx0ggGcscEcm8jPq5t034026AJF8k77isI~2uhxzdw1sdCfxPB6Tjhp3oOtHRMGXi9wfhqCEsfiWtXdfJ6N5EmdatwmwXGvUJN4H4wJTyCxoDCHiYLHJbpVU7hw6jKPwaB6CTVTPyANsOUEM3-uWEck0xx1RqG0n~vEdRbTNkhntJUbBQXSZ9WMKwZyrgmGcm2QGrDUXYc-K2sVayyEWT5Bjjk22B6~oVK0brf7n1PXVS7qg__"
            imagePosition="left"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
