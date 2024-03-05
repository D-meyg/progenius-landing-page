export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:container w-[90%] md:w-[unset] mx-auto">{ children }</div>;
};
