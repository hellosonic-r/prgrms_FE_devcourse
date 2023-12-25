interface IWrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return <div>{children}</div>;
};

export default Wrapper;
