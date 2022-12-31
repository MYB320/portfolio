function Pimg({ src }) {
  return (
    <img
      className="shadow rounded-full max-w-[10rem] max-h-[10rem] align-middle border-8 border-solid border-violet-300"
      src={src}
      alt="ProfileImage"
    />
  );
}

export default Pimg;
