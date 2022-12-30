import img from "../assets/img.jpg";

function Nimg() {
  return (
    <div className="mx-auto mt-auto mb-0 py-2">
      <img
        className="shadow rounded-full max-w-[10rem] max-h-[10rem] align-middle border-8 border-solid border-violet-300"
        src={img}
        alt="pi"
      />
    </div>
  );
}

export default Nimg;
