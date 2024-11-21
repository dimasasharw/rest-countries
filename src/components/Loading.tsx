const Loading = () => (
  <div className="flex justify-center items-center backdrop-blur-[0.5px] w-full h-full z-10 absolute top-0 left-0 mx-auto my-auto bg-transparent">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="55"
      height="55"
      style={{ shapeRendering: 'auto', display: 'block' }}
      opacity="0.5"
    >
      <g>
        <path
          strokeWidth="12"
          stroke="#828282"
          fill="none"
          d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
        />
        <path fill="#828282" d="M49 3L49 27L61 15L49 3" />
        <animateTransform
          keyTimes="0;1"
          values="0 50 50;360 50 50"
          dur="0.5s"
          repeatCount="indefinite"
          type="rotate"
          attributeName="transform"
        />
      </g>
    </svg>
  </div>
);

export default Loading;
