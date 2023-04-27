import { useTranslation } from "react-i18next";

const Button = ({
  classes,
  label,
  ButtonFun,
  children,
  type = "button",
}: {
  classes: string;
  label?: string;
  ButtonFun?: Function;
  children?: any;
  type?: any;
}) => {
  const { t } = useTranslation("common");

  const runButtonFun = () => {
    if (ButtonFun) ButtonFun();
  };
  return (
    <button className={classes} onClick={() => runButtonFun()} type={type}>
      {label && t(label)}
      {!label && children}
    </button>
  );
};

export default Button;
