import './button.css';

const DefaultButton = ({ children = 'button', className, ...other }) => {
  return (
    <button className={`customBtn defaultBtn ${className}`} {...other}>
      {children}
    </button>
  );
};

export default DefaultButton;
