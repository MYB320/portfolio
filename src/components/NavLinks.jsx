function NLinks() {
  const className =
    "p-2 text-gray-300 hover:text-white uppercase text-base font-semibold";
  return (
    <div className="flex flex-col mx-auto mb-auto mt-0">
      <button className={className}>About me</button>
      <button className={className}>Experience</button>
      <button className={className}>Education</button>
      <button className={className}>Skills</button>
      <button className={className}>Works</button>
      <button className={className}>Intersts</button>
    </div>
  );
}

export default NLinks;
